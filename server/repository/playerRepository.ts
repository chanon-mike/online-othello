import type { UserId } from '$/commonTypesWithClient/branded';
import type { PlayerModel } from '$/commonTypesWithClient/models';
import { UserIdParser, lobbyIdParser } from '$/service/idParsers';
import { prismaClient } from '$/service/prismaClient';
import { boardUseCase } from '$/usecase/board/boardUseCase';
import type { Player } from '@prisma/client';
import { boardRepository } from './board/boardRepository';

export type UserColorDict = { black?: PlayerModel; white?: PlayerModel };
export type PlayerTurn = UserId | undefined;

export type Score = { blackScore: number; whiteScore: number };

const toModel = (prismaPlayer: Player): PlayerModel => ({
  userId: UserIdParser.parse(prismaPlayer.userId),
  lobbyId: lobbyIdParser.parse(prismaPlayer.lobbyId),
  in: prismaPlayer.in.getTime(),
  out: prismaPlayer.out?.getTime(),
  color: prismaPlayer.color,
  score: prismaPlayer.score,
});

export const playerRepository = {
  save: async (player: PlayerModel) => {
    await prismaClient.player.upsert({
      where: { userId_lobbyId: { userId: player.userId, lobbyId: player.lobbyId } },
      update: {
        score: player.score,
      },
      create: {
        userId: player.userId,
        lobbyId: player.lobbyId,
        in: new Date(player.in),
        color: player.color,
        score: player.score,
      },
    });
  },
  getAllInLobby: async (lobbyId: string): Promise<PlayerModel[]> => {
    const player = await prismaClient.player.findMany({
      where: { lobbyId },
    });
    return player.map(toModel);
  },
  getByUserId: async (lobbyId: string, userId: UserId): Promise<PlayerModel> => {
    const player = await prismaClient.player.findFirst({
      where: { userId, lobbyId },
    });
    if (!player) throw new Error("Player doesn't exist");
    return toModel(player);
  },
  createPlayer: async (lobbyId: string, userId: UserId): Promise<PlayerModel> => {
    // Set a color of player to 1 if no one in lobby, else 2
    const playerList = await playerRepository.getAllInLobby(lobbyId);
    const color = playerList.length === 0 ? 1 : 2;

    // Create a new player
    const newPlayer = {
      userId,
      lobbyId: lobbyIdParser.parse(lobbyId),
      in: Date.now(),
      color,
      score: 2,
    };
    await playerRepository.save(newPlayer);

    return newPlayer;
  },
  getAllPlayerTurn: async (lobbyId: string): Promise<UserColorDict> => {
    const playerList = await playerRepository.getAllInLobby(lobbyId);
    const userColorDict: UserColorDict = {};

    playerList.length === 2 &&
      playerList.forEach((player) => {
        if (player.color === 1) userColorDict.black = player;
        else if (player.color === 2) userColorDict.white = player;
      });
    return userColorDict;
  },
  switchTurn: async (lobbyId: string, currentTurnUserId: UserId): Promise<UserId> => {
    const userColorDict = await playerRepository.getAllPlayerTurn(lobbyId);
    const blackPlayer = userColorDict.black;
    const whitePlayer = userColorDict.white;

    // Next turn is white turn if it the first turn (BUG) (HAVEN'T TEST if it fixed or not after refactor)
    if (blackPlayer && whitePlayer) {
      const opponentPlayerTurn: PlayerTurn =
        currentTurnUserId === blackPlayer.userId ? whitePlayer.userId : blackPlayer.userId;

      // If opponent can move, pass turn to opponent
      // If opponent can't move, your turn
      if ((await boardUseCase.getValidMoves(lobbyId, opponentPlayerTurn)).length)
        currentTurnUserId = opponentPlayerTurn;
    }

    return currentTurnUserId;
  },
  setScore: async (lobbyId: string): Promise<void> => {
    // Retrieve the user color dictionary for the given lobbyId
    const userColorDict: UserColorDict = await playerRepository.getAllPlayerTurn(lobbyId);
    const { blackScore, whiteScore } = await calculateScore(lobbyId);

    if (userColorDict.black && userColorDict.white) {
      // Update black and white player score
      const blackPlayer: PlayerModel = {
        userId: userColorDict.black.userId,
        lobbyId: userColorDict.black.lobbyId,
        in: userColorDict.black.in,
        color: userColorDict.black.color,
        score: blackScore,
      };
      const whitePlayer: PlayerModel = {
        userId: userColorDict.white.userId,
        lobbyId: userColorDict.white.lobbyId,
        in: userColorDict.white.in,
        color: userColorDict.white.color,
        score: whiteScore,
      };

      await playerRepository.save(blackPlayer);
      await playerRepository.save(whitePlayer);
    }
  },
};

const calculateScore = async (lobbyId: string): Promise<Score> => {
  // Retrieve the board data for the given lobbyId
  const prismaBoard = await boardRepository.getCurrent(lobbyId);
  const boardData = prismaBoard.boardData;
  let blackScore = 0;
  let whiteScore = 0;

  // Calculate the scores based on the values in the board data
  boardData.forEach((row, y) =>
    row.forEach((_, x) => {
      if (boardData[y][x] === 1) {
        blackScore += 1;
      } else if (boardData[y][x] === 2) {
        whiteScore += 1;
      }
    })
  );

  return { blackScore, whiteScore };
};

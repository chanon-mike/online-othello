import type { UserId } from '$/commonTypesWithClient/branded';
import type { PlayerModel, UserModel } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';
import type { Player } from '@prisma/client';
import { boardRepository } from './boardRepository';

export type UserColorDict = { black?: UserId; white?: UserId };
export type PlayerTurn = UserId | undefined;

const userColorDict: UserColorDict = {};
let currentPlayer: PlayerTurn = undefined;

const toModel = (prismaPlayer: Player): PlayerModel => ({
  id: prismaPlayer.id,
  lobbyId: prismaPlayer.lobbyId,
  userId: prismaPlayer.userId as UserId,
  displayName: prismaPlayer.displayName,
  color: prismaPlayer.color,
  created: prismaPlayer.createdAt.getTime(),
});

export const getCurrentPlayerInLobby = async (
  lobbyId: PlayerModel['lobbyId']
): Promise<PlayerModel[]> => {
  // Get current player that in the lobby of lobbyId
  const prismaPlayer = await prismaClient.player.findMany({
    where: {
      lobbyId,
    },
  });
  return prismaPlayer.map(toModel);
};

export const createPlayer = async (
  lobbyId: PlayerModel['lobbyId'],
  user: UserModel
): Promise<PlayerModel> => {
  const existingPlayer = await prismaClient.player.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (existingPlayer) {
    // userId already exists, return an error response
    console.log('User already exist');
    throw new Error('User already has a player');
  } else {
    // Create a player linked to a lobby id
    const prismaPlayer = await prismaClient.player.create({
      data: {
        userId: user.id,
        displayName: user.displayName ?? user.id,
        color: playerRepository.getUserColor(user.id),
        lobby: {
          connect: {
            id: lobbyId,
          },
        },
      },
    });
    return toModel(prismaPlayer);
  }
};

export const playerRepository = {
  getUserColor: (userId: UserId): number => {
    if (userColorDict.black === userId) {
      return 1;
    } else if (userColorDict.white === userId) {
      return 2;
    } else if (userColorDict.black === undefined) {
      userColorDict.black = userId;
      return 1;
    } else {
      userColorDict.white = userId;
      return 2;
    }
  },
  getCurrentPlayer: (): PlayerTurn => {
    // Get current turn, for first move, black start first
    if (currentPlayer === undefined) currentPlayer = userColorDict.black;
    return currentPlayer;
  },
  setCurrentPlayer: (userId: PlayerTurn): void => {
    // Set the current turn to player id
    currentPlayer = userId;
  },
  getUserColorDict: (): UserColorDict => {
    return userColorDict;
  },
  switchPlayerTurnWithValidation: (): PlayerTurn => {
    // If current player can move and opponent can move too, switch to opponent turn and set to opponent turn
    const opponentPlayer: PlayerTurn = switchTurn();
    if (opponentPlayer && boardRepository.getValidMoves(opponentPlayer).length) {
      currentPlayer = opponentPlayer;
    }

    return currentPlayer;
  },
};

// Helper function to switch player turn in dict
const switchTurn = (): PlayerTurn => {
  // Switch turn (black to white, white to black)
  return currentPlayer === userColorDict.black ? userColorDict.white : userColorDict.black;
};

import { playerRepository } from '$/repository/playerRepository';

import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ params: { lobbyId } }) => ({
    status: 200,
    body: { player: await playerRepository.getAllInLobby(lobbyId) },
  }),
  post: async ({ params: { lobbyId }, user }) => ({
    status: 201,
    body: { player: await playerRepository.createPlayer(lobbyId, user.id) },
  }),
}));
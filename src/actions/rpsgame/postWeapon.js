import { CALL_API, UPDATE } from '../../middleware/api'

export default (weapon) => {
  return {
    [CALL_API]: {
      service: 'games',
      method: UPDATE,
      type: 'GAME_UPDATED',
      authenticate: true,
      params: { playerInput: weapon },
      id: gameId,
    }
  }
}

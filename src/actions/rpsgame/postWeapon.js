import { CALL_API, PATCH } from '../../middleware/api'

export default (weaponText, gameId) => {
  return {
    [CALL_API]: {
      service: 'games',
      method: PATCH,
      authenticate: true,
      params: { PlayerInput: weaponText },
      id: gameId,

    }
  }
}

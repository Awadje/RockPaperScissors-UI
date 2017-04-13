import { CALL_API, UPDATE } from '../../middleware/api'

export default (weaponText) => {
  return {
    [CALL_API]: {
      service: 'games',
      method: UPDATE,
      type: 'GAME_UPDATED',
      authenticate: true,
      params: { playerInput: weaponText }
    }
  }
}

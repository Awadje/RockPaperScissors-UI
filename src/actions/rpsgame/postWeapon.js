import { CALL_API, CREATE } from '../../middleware/api'

export default (weaponText) => {
  return {
    [CALL_API]: {
      service: 'games',
      method: CREATE,
      type: 'MESSAGE_POSTED',
      authenticate: true,
      params: { text: weaponText }
    }
  }
}

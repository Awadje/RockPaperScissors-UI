import { CALL_API, DESTROY } from '../../middleware/api'

export default () => {
  return {
    [CALL_API]: {
      service: 'games',
      method: DESTROY,
      type: 'GAME_REMOVED',
      authenticate: true,
    }
  }
}

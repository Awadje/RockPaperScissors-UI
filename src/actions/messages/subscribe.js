// src/actions/messages/subscribe.js
import API from '../../middleware/api'

export const SUBSCRIBED_TO_MESSAGES_SERVICE = 'SUBSCRIBED_TO_MESSAGES_SERVICE'
export const MESSAGE_CREATED = 'MESSAGE_CREATED'
export const MESSAGE_UPDATED = 'MESSAGE_UPDATED'
export const MESSAGE_REMOVED = 'MESSAGE_REMOVED'

const api = new API()
const messages = api.service('messages')

export default () => {
  return (dispatch) => {
    messages.on('created', (message) => { dispatch(createdMessage(message)) })
    messages.on('updated', (message) => { dispatch(updatedMessage(message)) })
    messages.on('patched', (message) => { dispatch(updatedMessage(message)) })
    messages.on('removed', (message) => { dispatch(removedMessage(message)) })

    api.app.authenticate()
      .then(() => {
        messages.find()
          .then((messages) => {
            dispatch({
              type: SUBSCRIBED_TO_MESSAGES_SERVICE,
              payload: messages.data
            })
          })
        })
  }
}

const createdMessage = (message) => {
  return {
    type: MESSAGE_CREATED,
    payload: message
  }
}

const updatedMessage = (message) => {
  return {
    type: MESSAGE_UPDATED,
    payload: message
  }
}

const removedMessage = (message) => {
  return {
    type: MESSAGE_REMOVED,
    payload: message
  }
}

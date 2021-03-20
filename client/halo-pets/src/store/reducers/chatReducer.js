const initialState = {
  chatRoom: {},
  loading: false,
  error: null
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch(type) {
    case 'CHATS/SET_LOADING':
      return { ...state, loading: true }
    case 'CHATS/SET_ERROR':
      return { ...state, error: payload, loading: false }
    default:
      return state
  }
}

export default reducer
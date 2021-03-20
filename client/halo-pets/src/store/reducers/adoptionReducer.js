const initialState = {
  adoptions: [],
  adoptionDetail: {},
  loading: false,
  error: null
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch(type) {
    case 'ADOPTIONS/SET_LOADING':
      return { ...state, loading: true }
    case 'ADOPTIONS/SET_ERROR':
      return { ...state, error: payload, loading: false }
    default:
      return state
  }
}

export default reducer
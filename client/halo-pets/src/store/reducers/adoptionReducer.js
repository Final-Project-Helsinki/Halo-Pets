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
    case 'ADOPTIONS/FETCH_ADOPTIONS':
      return { ...state, error: null, loading: false, adoptions: payload }
    default:
      return state
  }
}

export default reducer
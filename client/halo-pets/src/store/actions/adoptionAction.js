function setLoading(payload) {
  return {
    type: 'ADOPTIONS/SET_LOADING',
    payload: payload
  }
}

function setError(payload) {
  return {
    type: 'ADOPTIONS/SET_ERROR',
    payload: payload
  }
}

function setFetchAdoptions(payload) {
  return {
    type: 'ADOPTIONS/FETCH_ADOPTIONS',
    payload
  }
}

export function fetchAdoptions() {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true))
      const response = await fetch('http://localhost:3001/adoptions', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token')
        }
      })
      const data = await response.json()
      console.log(data, '<<< data adoptions di action');
      dispatch(setLoading(false))
      dispatch(setFetchAdoptions(data))
    } catch (err) {
      dispatch(setError(err))
    }
  }
}
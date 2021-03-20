export function setDoctor(payload) {
  return ({ type: 'DOCTOR/SET_DOCTOR', payload })
}

export function setError(error) {
  return ({ type: 'DOCTOR/SET_ERROR', payload: error })
}

export function getDoctor() {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/doctors', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token')
        }
      })
      const data = await response.json()
      dispatch(setDoctor(data))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}
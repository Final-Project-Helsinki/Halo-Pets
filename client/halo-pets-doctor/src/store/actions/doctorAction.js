export function setDoctor(payload) {
  return ({ type: 'DOCTOR/SET_DATA', payload })
}

export function setError(error) {
  return ({ type: 'DOCTOR/SET_ERROR', payload: error })
}

export function getDoctor(payload) {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/doctors/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
      const data = await response.json()
      localStorage.setItem('access_token', data.access_token)
      dispatch(setDoctor(data))
      return data
    } catch (error) {
      dispatch(setError(error))
    }
  }
}
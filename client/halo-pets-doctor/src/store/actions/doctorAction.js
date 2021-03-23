function setDoctor(payload) {
  return ({ type: 'DOCTOR/SET_DATA', payload })
}

function setError(error) {
  return ({ type: 'DOCTOR/SET_ERROR', payload: error })
}

function setLoading(payload) {
  return ({ type: 'DOCTOR/SET_LOADING', payload })
}

export function getDoctor(payload) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true))
      const response = await fetch('http://localhost:3001/doctors/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
      const data = await response.json()
      localStorage.setItem('access_token', data.access_token)
      localStorage.setItem('name', data.name)
      localStorage.setItem('email', data.email)
      dispatch(setLoading(false))
      dispatch(setDoctor(data))
      return data
    } catch (error) {
      dispatch(setError(error))
    }
  }
}
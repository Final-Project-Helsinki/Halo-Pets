export function setRoom(payload) {
  return {
    type: 'CHAT/SET_ROOM',
    payload: payload
  }
}

export function setError(error) {
  return {
    type: 'CHAT/SET_ERROR',
    payload: error
  }
}

export function getRoom(payload) {
  console.log(payload, 'LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLlll');
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/chat/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token')
        },
        body: JSON.stringify({ doctor_id: payload })
      })
      const data = await response.json()
      dispatch(setRoom(data))
      return data
    } catch (error) {
      dispatch(setError(error))
    }
  }
}



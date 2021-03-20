import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { getDoctor } from '../store/actions/doctorAction'
import { getRoom } from '../store/actions/chatAction'

export default function HealthCarePage() {
  const dataDoctor = useSelector(state => state.doctorReducer.doctors)
  const roomId = useSelector(state => state.chatReducer.chatRoom)
  const dispatch = useDispatch()
  const history = useHistory()
  useEffect(() => {
    dispatch(getDoctor())
  }, [dispatch])

  async function chat(id) {
    try {
      const x = await dispatch(getRoom(id))
      history.push({ pathname: '/chat', state: x })
    } catch (error) {
      console.log(error);
    }
  }

  function test() {
    console.log(roomId)
  }

  return (
    <div>
      <h1>Doctor Page</h1>
      {/* <p>{JSON.stringify(dataDoctor)}</p> */}
      <div className="row">
        {
          dataDoctor.map(el => {
            return (
              <div className="col-md-4">
                <div className="card" style={{ width: '18rem' }}>
                  <div className="card-body">
                    <h5 className="card-title">{el.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{el.email}</h6>
                    <p className="card-text">{el.phoneNumber}</p>
                  </div>
                  <button type="button" onClick={() => chat(el.id)} className="btn btn-primary">Chat me :)</button>
                </div>
              </div>
            )
          })
        }
      </div>
      <button type="button" onClick={test} className="btn btn-primary">Chat me :)</button>
    </div>
  )
}
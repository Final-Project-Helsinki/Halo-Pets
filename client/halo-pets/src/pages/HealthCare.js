import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { getDoctor } from '../store/actions/doctorAction'
import { getRoom } from '../store/actions/chatAction'
import AppBar from '../components/AppBar'
import Header from '../components/Header'
import DrawerHeader from '../components/DrawerHeader'
import clsx from 'clsx'
import CardDoctor from '../components/CardDoctor'
import {
  Grid,
  Avatar,
  Typography,
  Container

} from '@material-ui/core'

const sections = [
  { title: 'Home', url: '/home' },
  { title: 'Adoption', url: '/adoption' },
  { title: 'My Pet Favorites', url: '/favorites' },
  { title: 'Health Care', url: '/healthcare' },
];



export default function HealthCarePage() {
  const dataDoctor = useSelector(state => state.doctorReducer.doctors)
  const roomId = useSelector(state => state.chatReducer.chatRoom)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const history = useHistory()


  useEffect(() => {
    dispatch(getDoctor())
  }, [dispatch])

  async function chat(id) {
    try {
      const x = await dispatch(getRoom(id))
      history.push({ pathname: '/chat', state: x.id })
    } catch (error) {
      console.log(error);
    }
  }

  function test() {
    console.log(roomId)
  }

  function handleMainOpen(isOpen) {
    setOpen(isOpen)
  }

  return (
    // <div>
      <Container maxWidth="lg">
      <Header title="Health Care" sections={sections}/>
      <DrawerHeader/>
        <Grid xs={12}  style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', wrap: 'wrap'}}>
            {
              dataDoctor.map(el => {
                return (
                  <CardDoctor key={el.id} doctor={el}/>
                )
              })
            }
        </Grid>
      </Container>
    // </div>
  )
}

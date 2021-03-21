import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { getDoctor } from '../store/actions/doctorAction'
import { getRoom } from '../store/actions/chatAction'
import AppBar from '../components/AppBar'
import DrawerHeader from '../components/DrawerHeader'
import useStyles from '../helpers/style'
import gridUseStyles from '../helpers/gridStyles'
import clsx from 'clsx'
import CardDoctor from '../components/CardDoctor'
import {
  Grid
} from '@material-ui/core'

export default function HealthCarePage() {
  const dataDoctor = useSelector(state => state.doctorReducer.doctors)
  const roomId = useSelector(state => state.chatReducer.chatRoom)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const history = useHistory()
  const classes = useStyles()
  const gridClasses = gridUseStyles()
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

  function handleMainOpen(isOpen) {
    setOpen(isOpen)
  }

  return (
    <div className={classes.root}>
      <AppBar handleMainOpen={handleMainOpen}/>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <DrawerHeader/>
        <Grid container style={{justifyContent: 'space-evenly'}}>
          {/* <Grid item xs={12}> */}
            {
              dataDoctor.map(el => {
                return (
                  <CardDoctor key={el.id} doctor={el}/>
                )
              })
            }
          {/* </Grid> */}
        </Grid>
      </main>
    </div>
  )
}

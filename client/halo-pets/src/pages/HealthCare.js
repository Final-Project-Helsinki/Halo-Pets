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
  Grid,
  Avatar,
  Typography
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
    <div className={classes.root} style={{flexDirection: 'column'}}>
      <AppBar handleMainOpen={handleMainOpen}/>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <DrawerHeader/>
        <Grid container style={{justifyContent: 'center'}}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            {
              dataDoctor.map(el => {
                return (
                  <CardDoctor key={el.id} doctor={el}/>
                )
              })
            }
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </main>
      <Grid container>
        <Grid item xs={12} style={{ backgroundColor: '#11698e' }}>
          <Grid container className={[gridClasses.content]} style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Grid item={true} xs={2}>
              <Grid container style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Avatar component="div" style={{ height: '20vh', width: '20vh' }} src="https://lh3.googleusercontent.com/xcjoVGcqrQClcqI1uXacQnGNaKoOLuzVPdeYQ2C32rz1845IxIpeyLmBJGDjo-T9DlH-THM=s128" width="100%" />
              </Grid>
            </Grid>
            <Grid item xs={7}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h4" className={classes.text}>About us</Typography>
                  <Typography variant="p" className={classes.text}>
                    Your pet need health attention too.Halo pet's answer your need to have personal veterinarian close to you.
                    You could also adopt cute pet's that you want to add to your family, or you can give your pet to someone willing to take care with full love.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item={true} xs={3}>
              <Grid container style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Avatar component="div" style={{ height: '20vh', width: '20vh' }} src="https://lh3.googleusercontent.com/xcjoVGcqrQClcqI1uXacQnGNaKoOLuzVPdeYQ2C32rz1845IxIpeyLmBJGDjo-T9DlH-THM=s128" width="100%" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

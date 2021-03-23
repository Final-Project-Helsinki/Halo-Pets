import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from "react-redux"
import Card from '@material-ui/core/Card';
import { useHistory } from "react-router-dom"
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getRoom } from '../store/actions/chatAction'
import { CardMedia, Avatar, CardActionArea, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  button: {
    background: 'linear-gradient(45deg, #16c79a 30%, #11698e 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const dispatch = useDispatch()
  const history = useHistory()
  const [RoomVideo, setRoomVideo] = useState([])

  useEffect(() => {
    const url = 'https://api.daily.co/v1/rooms';
    const options = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer becea18a103ea46caf68daad57ed840de8cfadbedc137db19d824b42719b3b63'
      }
    };
    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        setRoomVideo(json.data)
      })
      .catch(err => console.error('error:' + err));
  }, [])

  async function chat(id) {
    try {
      const x = await dispatch(getRoom(id))
      history.push({ pathname: '/midtrans', state: x.id })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card style={{height: '200px'}}>
      <CardContent style={{display:'flex'}}>
        <Grid container>
          <Grid item xs={12}>
            <Grid container>
            <Grid item xs={2}>
              <Avatar
              src="https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg"
              className={classes.large}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h4" component="h2">
                dr. {props.doctor.name}
              </Typography>
              <Typography className={classes.pos} variant="h6" color="textSecondary">
                {props.doctor.email}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h5" component="p">
                Jasa Konsultasi 
              </Typography>
              <Typography variant="h5" component="p">
                Rp. 20.000 
              </Typography>
              <CardActions>
                <Button className={classes.button} onClick={() => chat(props.doctor.id)} size="small">Chat Me</Button>
              </CardActions>
            </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux"
import Card from '@material-ui/core/Card';
import { useHistory } from "react-router-dom"
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getRoom } from '../store/actions/chatAction'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

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
      history.push({ pathname: '/midtrans', state: id })
    } catch (error) {
      console.log(error);
    }
  }

  async function vidcall(ID) {
    let find = false
    try {
      const x = await dispatch(getRoom(ID))
      for (let i of RoomVideo) {
        if (+x.id === +i.name) {
          find = true
          break
        }
      }
      if (find === true) {
        const url = `https://halopets.daily.co/${x.id}`;
        const win = window.open(url, "_blank");
        win.focus();
      } else {
        const url = 'https://api.daily.co/v1/rooms';
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer becea18a103ea46caf68daad57ed840de8cfadbedc137db19d824b42719b3b63'
          },
          body: JSON.stringify({ name: `${x.id}` })
        };
        const response = await fetch(url, options)
        const data = await response.json()
        const win = window.open(data.url, "_blank");
        win.focus();
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          dr.
        </Typography>
        <Typography variant="h5" component="h2">
          {props.doctor.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.doctor.email}
        </Typography>
        <Typography variant="body2" component="p">
          {props.doctor.phoneNumber}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => chat(props.doctor.id)} size="small">Chat Me</Button>
        <Button onClick={() => vidcall(props.doctor.id)} size="small">Video Call Me</Button>
      </CardActions>
    </Card>
  );
}

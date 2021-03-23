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
import {
  CardMedia, 
  Avatar,
  CardActionArea,

} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 300
  },
  media: {
    height: 140,
  },
  large: {
    height: 120,
    width: 120
  }
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
      history.push({ pathname: '/midtrans', state: x.id })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card className={classes.root} raised={true}>
      <CardActionArea style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <CardMedia
          className={classes.media}
          title={'dr. '+ props.doctor.name}
        >
        <Avatar
          src=''
          className={classes.large}
        />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            dr. {props.doctor.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {props.doctor.email}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <Button size="large" color="primary" onClick={() => chat(props.doctor.id)}>
          Konsultasi
        </Button>
        <Typography variant="subtitle1" color="textSecondary" component="p">
            Tarif: 20.000
          </Typography>
      </CardActions>
    </Card>
  );
}

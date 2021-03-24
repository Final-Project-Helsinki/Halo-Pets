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
    maxWidth: '100%',
    width: 330,
    marginBottom: '20px',
    padding: '15px'
  },
  media: {
    height: 140,
  },
  large: {
    height: 120,
    width: 120
  }
});

const specialist =[
  'Veterinary Parasitology',
  'Veterinary Intensive Care',
  'Veterinary Intensive Care'
]

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

  const avatars = [
    'https://cdn1.vectorstock.com/i/1000x1000/14/80/doctor-web-icon-therapist-avatar-vector-18531480.jpg',
    'https://st4.depositphotos.com/19795498/22606/v/1600/depositphotos_226060300-stock-illustration-medical-icon-man-doctor-with.jpg',
    'https://cdn2.vectorstock.com/i/1000x1000/65/26/doctor-avatar-character-icon-vector-12866526.jpg'
  ]

  return (
    <Card className={classes.root} raised={true}>
      <CardActionArea style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <CardMedia
          className={classes.media}
        >
        <Avatar
          src={avatars[props.doctor.id - 1]}
          className={classes.large}
        />
        </CardMedia>
        <CardContent style={{textAlign: 'center'}}>
          <Typography variant="h4" component="h2" style={{color: '#385a96', fontSize: 25}}>
            drh. {props.doctor.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            specialist in <br/>{specialist[props.doctor.id - 1]}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <Button size="small" color="primary" onClick={() => chat(props.doctor.id)} style={{ backgroundColor: '#54bba3', color: 'white' }}>
          Consult
        </Button>
        <Typography variant="subtitle1" color="textSecondary" component="p">
            Fee: Rp. 20.000
          </Typography>
      </CardActions>
    </Card>
  );
}

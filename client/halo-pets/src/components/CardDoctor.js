import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
  console.log(props.doctor)
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

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
          { props.doctor.email}
        </Typography>
        <Typography variant="body2" component="p">
          { props.doctor.phoneNumber }
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => props.chat(props.doctor.id)} size="small">Chat Me</Button>
      </CardActions>
    </Card>
  );
}

import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  positionCenter: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}));

export default function Loading() {
  const classes = useStyles();
  return (
    <div className={classes.positionCenter}>
      <Grid container direction="row" justify="center">
        <CircularProgress color="secondary" style={{ height: 90, width: 90 }} />
      </Grid>
      <Grid container direction="row" justify="center">
        <Typography style={{ marginTop: 20 }}>Loading... Please wait...</Typography>
      </Grid>
    </div>
  )
}
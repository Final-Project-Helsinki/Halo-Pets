import { makeStyles } from '@material-ui/core/styles'
import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core";
import imgPaw from '../assets/paw.png'
import imgCat from '../assets/sandbox.png'
import imgDog from '../assets/dog.png'

const useStyles = makeStyles((theme) => ({
  rootCard: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // overflowY: 'scroll',
    boxShadow: '0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.25)',
  },
  cardPetSpecies: {
    maxWidth: 300,
    maxHeight: 300,
    boxShadow: '0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.25)',
    margin: '1rem'
  },  
  image: {
    width: '80%',
    height: '80%'
  }
}))

export default function CardFilterAdopt({ handleFilterAdopt }) {
  const classes = useStyles();
  return (
    <Card className={classes.rootCard}>
      <CardContent>
        <Typography variant="h5">Filter Pet</Typography>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Card className={classes.cardPetSpecies}>
            <CardContent>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <img src={imgPaw} className={classes.image} />
                <Button variant="contained" color="secondary" style={{ marginTop: 16 }} onClick={() => handleFilterAdopt('')}>All</Button>
              </Grid>
            </CardContent>
          </Card>
          <Card className={classes.cardPetSpecies}>
            <CardContent>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <img src={imgDog} className={classes.image} />
                <Button variant="contained" color="primary" style={{ marginTop: 16 }} onClick={() => handleFilterAdopt('dog')}>Dog</Button>
              </Grid>
            </CardContent>
          </Card>
          <Card className={classes.cardPetSpecies}>
            <CardContent>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <img src={imgCat} className={classes.image} />
                <Button variant="contained" color="secondary" style={{ marginTop: 16 }} onClick={() => handleFilterAdopt('cat')}>Cat</Button>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </CardContent>
    </Card>
  )
}
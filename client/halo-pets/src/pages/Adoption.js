import React,  { useEffect, useState } from 'react'
import clsx from 'clsx';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  GridList,
  GridListTile,
  ListSubheader,
  Snackbar,
  Typography,
} from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AppBar from '../components/AppBar'
import DrawerHeader from '../components/DrawerHeader'
import useStyles from '../helpers/style'
import useStylesAdoption from '../helpers/styleAdoption'
import ModalFormAdoption from '../components/ModalFormAdopt'
import CardBarTile from '../components/CardBarTile';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdoptions } from '../store/actions/adoptionAction';
import ModalFormAdopt from '../components/ModalFormAdopt';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AdoptionPage() {
  const dispatch = useDispatch()
  const classes = useStyles()
  const styles = useStylesAdoption()
  const [open, setOpen] = useState(false)
  const [openModalForm, setOpenModalForm] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorForm, setErrorForm] = useState('');
  const [formIndex, setFormIndex] = useState('');
  const [formAdopt, setFormAdopt] = useState({
    name: '',
    species: '',
    gender: '',
    dob: '',
    image_url: ''
  });

  const { adoptions, loading, error } = useSelector(state => ({
    adoptions: state.adoptionReducer.adoptions,
    loading: state.adoptionReducer.loading,
    error: state.adoptionReducer.error
  }))

  useEffect(() => {
    dispatch(fetchAdoptions())
  }, [dispatch])

  const handleOpenModalForm = () => {
    setOpenModalForm(true);
  };
  
  const handleModalAdd = () => {
    setFormAdopt({
      name: '',
      species: '',
      gender: '',
      dob: '',
      image_url: ''
    });
    handleOpenModalForm();
  }

  const handleMainOpen = (isOpen) => {
    setOpen(isOpen)
  }

  const handleChangeForm = (event) => {
    let { name, value } = event.target;
    setFormAdopt((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (!formIndex) {
    }
  }

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  const handleCloseModalForm = () => {
    setOpenModalForm(false);
    setFormIndex('');
  };

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
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
      <Card className={styles.rootCard}>
        <CardContent>
          <Typography variant="h5">Filter Pet</Typography>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Card className={styles.cardPetSpecies}>
              <CardContent>
                <Button variant="contained" color="secondary">All</Button>
              </CardContent>
            </Card>
            <Card className={styles.cardPetSpecies}>
              <CardContent>
                <Button variant="contained" color="primary">Dog</Button>
              </CardContent>
            </Card>
            <Card className={styles.cardPetSpecies}>
              <CardContent>
                <Button variant="contained" color="secondary">Cat</Button>
              </CardContent>
            </Card>
          </Grid>
          </CardContent>
      </Card>
      <GridList cellHeight={400} cols={4} className={styles.gridList} spacing={20}>
        <GridListTile key="Subheader-adoption" cols={4} style={{ height: 'auto' }}>
          <ListSubheader component="div">
            <Button
              variant="contained"
              color="secondary"
              className={styles.button}
              startIcon={<AddCircleOutlineIcon />}
              onClick={handleModalAdd}
            >
              Add Pet
            </Button>
          </ListSubheader>
        </GridListTile>
        {
          adoptions.map(pet => (
            <GridListTile className={styles.gridListTile}>
              <img src={pet.image_url} alt={pet.name} />
              <CardBarTile
                pet={pet}
              />
            </GridListTile>
          ))
        }
      </GridList>
        <ModalFormAdopt
          title={formIndex ? 'Edit Pet' : 'Add New Pet'}
          open={openModalForm}
          formAdopt={formAdopt}
          handleCloseModalForm={handleCloseModalForm}
          handleChangeForm={handleChangeForm}
          handleSubmitForm={handleSubmitForm}
        />
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity="error">
            {errorForm}
          </Alert>
        </Snackbar>
      </main>
    </div>
  )
}
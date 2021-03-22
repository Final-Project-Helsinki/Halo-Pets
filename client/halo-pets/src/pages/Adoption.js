import React,  { useEffect, useState } from 'react'
import clsx from 'clsx';
import {
  Button,
  Card,
  CardContent,
  Fab,
  Grid,
  GridList,
  GridListTile,
  ListSubheader,
  Snackbar,
  Typography,
  Zoom,
} from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AppBar from '../components/AppBar'
import DrawerHeader from '../components/DrawerHeader'
import useStyles from '../helpers/style'
import useStylesAdoption from '../helpers/styleAdoption'
import CardBarTile from '../components/CardBarTile';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAdoptions,
  createAdoption,
  fetchDetail,
  updateAdoption,
  deleteAdoption,
  fetchAdoptionsBySpecies
} from '../store/actions/adoptionAction';
import ModalFormAdopt from '../components/ModalFormAdopt';
import MuiAlert from '@material-ui/lab/Alert';
import Swal from 'sweetalert2';
import ModalDetailAdopt from '../components/ModalDetailAdopt';
import CardFilterAdopt from '../components/CardFilterAdopt';
import { createFavorite, deleteFavorite, fetchFavorites } from '../store/actions/favoriteAction';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function convertDate(d) {
  d = new Date(d);
  return [d.getFullYear(), d.getMonth()+1, d.getDate()]
      .map(el => el < 10 ? `0${el}` : `${el}`).join('-');
}

export default function AdoptionPage() {
  const dispatch = useDispatch()
  const classes = useStyles()
  const styles = useStylesAdoption();
  const [open, setOpen] = useState(false);
  const handleMainOpen = (isOpen) => {
    setOpen(isOpen)
  }
  const [openModalForm, setOpenModalForm] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openModalDetail, setOpenModalDetail] = useState(false);
  const [errorForm, setErrorForm] = useState('');
  const [fileName, setFileName] = useState('');
  const [formIndex, setFormIndex] = useState('');
  const [formAdopt, setFormAdopt] = useState({
    name: '',
    species: '',
    gender: '',
    dob: '',
    description: '',
    image_url: [],
    latitude: 0.1,
    longitude: 0.1
  });
  const [petDetail, setPetDetail] = useState({});
  const [species, setSpecies] = useState('');
  const [filteredUserId, setFilteredUserId] = useState('');

  const { adoptions, loading, error } = useSelector(state => ({
    adoptions: state.adoptionReducer.adoptions,
    loading: state.adoptionReducer.loading,
    error: state.adoptionReducer.error
  }))

  const handleOpenModalForm = () => {
    setOpenModalForm(true);
  };

  const handleCloseModalForm = () => {
    setOpenModalForm(false);
  };

  const handleCloseModalDetail = () => {
    setOpenModalDetail(false);
  }

  const handleEditAdopt = async (adoptId) => {
    // setAdoptId(adoptId);
    try {
      setFormIndex(adoptId);
      const adoptionDetail = await dispatch(fetchDetail(adoptId))
      console.log(adoptionDetail, '<<<<<<<< buat di form edit');
      await setFormAdopt((prev) => ({ ...prev,
        name: adoptionDetail.name,
        species: adoptionDetail.species,
        gender: adoptionDetail.gender,
        dob: convertDate(adoptionDetail.dob),
        description: adoptionDetail.description,
        image_url: [adoptionDetail.image_url]
      }));

      await navigator.geolocation.watchPosition(function (position) {
        setFormAdopt((prev) => ({ ...prev,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }));
      })
      
      await setFileName(adoptionDetail.image_url.split('/').pop().slice(13))

      handleOpenModalForm();
    } catch (err) {
      console.log(err);
    }
  }

  const handleFilterAdopt = (species) => {
    setSpecies(species);
    setFilteredUserId('')
  }

  const handleFilterMyPet = (user_id) => {
    setFilteredUserId(user_id);
    setSpecies('');
  }

  useEffect(() => {
    dispatch(fetchAdoptions())
    dispatch(fetchFavorites())
  }, [dispatch, species])

  const handleModalAdd = () => {
    navigator.geolocation.watchPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);

      setFormAdopt({
        name: '',
        species: '',
        gender: '',
        dob: convertDate(new Date()),
        description: '',
        image_url: [],
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    });
    setFileName('');
    setFormIndex('');
    handleOpenModalForm();
  }

  const handleChangeForm = (event) => {
    let { name, value, files } = event.target;
    // console.log(event.target.files[0]);
    if (files) {
      setFormAdopt((prev) => ({ ...prev, image_url: files[0] }));
      setFileName(files[0].name)
    } else {
      setFormAdopt((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    let errMsg;

    console.log(formAdopt, '<<<<<< form adopt');

    const formData = new FormData()
    formData.set('name', formAdopt.name)
    formData.set('species', formAdopt.species)
    formData.set('gender', formAdopt.gender)
    formData.set('dob', formAdopt.dob)
    formData.set('description', formAdopt.description)
    formData.append('image_url', formAdopt.image_url)
    formData.set('latitude', formAdopt.latitude)
    formData.set('longitude', formAdopt.longitude)

    const payload = formData

    if (!formIndex) {
      try {
        const returnedResp = await dispatch(createAdoption(payload))

        if (!returnedResp) {
          Swal.fire({
            icon: 'success',
            title: 'Loading ...',
            text: 'Please wait'
          })          
        } else {
          if (Object.keys(returnedResp)[0] === 'msg') {
            let temp = ''
            returnedResp.msg.forEach((el, idx) => {
              if (idx < returnedResp.msg.length - 1) {
                temp += `${el}, `
              } else {
                temp += el
              }
            })
            errMsg = temp
            setErrorForm(errMsg)
            setOpenSnackbar(true)
          }
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const returnedResp = await dispatch(updateAdoption({ payload, id: formIndex }))

        if (Object.keys(returnedResp)[0] === 'msg') {
          let temp = ''
          returnedResp.msg.forEach((el, idx) => {
            if (idx < returnedResp.msg.length - 1) {
              temp += `${el}, `
            } else {
              temp += el
            }
          })
          errMsg = temp
          setErrorForm(errMsg)
          setOpenSnackbar(true)
        }
      } catch (err) {
        console.log(err);
      }
    }

    if (!errMsg) {
      handleCloseModalForm();
    }
  }

  const handleDeleteAdopt = (adoptId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#24a944',
      cancelButtonColor: '#dc3546',
      confirmButtonText: 'Yes, delete it!'
    })
      .then(result => {
        if (result.value) {
          dispatch(deleteAdoption(adoptId))
          Swal.fire('Deleted!', 'Your pet data for adoption has been deleted.', 'success')
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            'Your pet data for adoption is safe!',
            'error'
          )
        }
      })
  }

  const handleDetailAdopt = async (adoptId) => {
    try {
      const adoptionDetail = await dispatch(fetchDetail(adoptId))
      await setPetDetail(adoptionDetail)
      setOpenModalDetail(true)
    } catch (err) {
      console.log(err);
    }
  }

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  const { favorites, loading: loadingFavorites, error: errorFavorites } = useSelector(state => ({
    favorites: state.favoriteReducer.favorites,
    loading: state.favoriteReducer.loading,
    error: state.favoriteReducer.error
  }))

  const handleAddFavorite = (adoptId) => {
    dispatch(createFavorite(adoptId))
  }

  const handleRemoveFavorite = (adoptId) => {
    const isFav = favorites.find(fav => fav.adoption_id === adoptId)
    dispatch(deleteFavorite(isFav.id))
  }

  const filteredAdoptionsByUserId = adoptions.filter(adopt => {
    if (species) {
      return adopt.species.toLowerCase().includes(species.toLowerCase())
    } else if (filteredUserId) {
      return adopt.user_id == filteredUserId
    } else {
      return adopt
    }
  })

  console.log(filteredUserId, filteredAdoptionsByUserId, '<<< filtered')
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
      <CardFilterAdopt
        handleFilterAdopt={handleFilterAdopt}
        handleFilterMyPet={handleFilterMyPet}
      />
      <GridList cellHeight={400} cols={4} className={styles.gridList} spacing={20} style={{ marginTop: '2rem' }}>
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
          // filteredUserId ? (
          //   filteredAdoptionsByUserId.map(pet => (
          //     <GridListTile className={styles.gridListTile} key={pet.id}>
          //       <img src={pet.image_url} alt={pet.name} />
          //       <CardBarTile
          //         favorites={favorites}
          //         pet={pet}
          //         handleEditAdopt={handleEditAdopt}
          //         handleDeleteAdopt={handleDeleteAdopt}
          //         handleDetailAdopt={handleDetailAdopt}
          //         handleAddFavorite={handleAddFavorite}
          //         handleRemoveFavorite={handleRemoveFavorite}
          //       />
          //     </GridListTile>
          //   ))
          // ) : (
          filteredAdoptionsByUserId.map(pet => (
            <GridListTile className={styles.gridListTile} key={pet.id}>
              <img src={pet.image_url} alt={pet.name} />
              <CardBarTile
                favorites={favorites}
                pet={pet}
                handleEditAdopt={handleEditAdopt}
                handleDeleteAdopt={handleDeleteAdopt}
                handleDetailAdopt={handleDetailAdopt}
                handleAddFavorite={handleAddFavorite}
                handleRemoveFavorite={handleRemoveFavorite}
              />
            </GridListTile>
          ))
          // )
        }
      </GridList>
      <ModalFormAdopt
        title={formIndex ? 'Edit Pet' : 'Add New Pet'}
        open={openModalForm}
        formAdopt={formAdopt}
        handleCloseModalForm={handleCloseModalForm}
        handleChangeForm={handleChangeForm}
        handleSubmitForm={handleSubmitForm}
        fileName={fileName}
      />
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="error">
          {errorForm}
        </Alert>
      </Snackbar>
      {
        Object.keys(petDetail).length === 0 ? <div></div> :
        (
          <ModalDetailAdopt
            open={openModalDetail}
            pet={petDetail}
            handleCloseModalDetail={handleCloseModalDetail}
          />
        )
      }
      </main>
    </div>
  )
}
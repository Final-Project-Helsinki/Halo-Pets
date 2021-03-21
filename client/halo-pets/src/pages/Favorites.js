import React,  { useEffect, useState } from 'react'
import clsx from 'clsx';
import {
  GridList,
  GridListTile,
  ListSubheader,
  Snackbar,
  Typography,
} from '@material-ui/core'

import AppBar from '../components/AppBar'
import DrawerHeader from '../components/DrawerHeader'
import useStyles from '../helpers/style'
import { useDispatch, useSelector } from 'react-redux'
import { createFavorite, deleteFavorite, fetchFavorites } from '../store/actions/favoriteAction';
import Loading from '../components/Loading';
import Error from '../components/Error';
import CardBarTile from '../components/CardBarTile';
import useStylesAdoption from '../helpers/styleAdoption';
import Swal from 'sweetalert2';
import { deleteAdoption, fetchAdoptions, fetchDetail, updateAdoption } from '../store/actions/adoptionAction';
import ModalDetailAdopt from '../components/ModalDetailAdopt';
import ModalFormAdopt from '../components/ModalFormAdopt';
import MuiAlert from '@material-ui/lab/Alert';
import convertDate from '../helpers/convertDate';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function FavoritesPage() {
  const classes = useStyles()
  const styles = useStylesAdoption();
  const [open, setOpen] = useState(false);
  const [openModalDetail, setOpenModalDetail] = useState(false);
  const [petDetail, setPetDetail] = useState({});

  function handleMainOpen(isOpen) {
    setOpen(isOpen)
  }

  const dispatch = useDispatch()
  const { favorites, loading, error } = useSelector(state => ({
    favorites: state.favoriteReducer.favorites,
    loading: state.favoriteReducer.loading,
    error: state.favoriteReducer.error
  }));

  useEffect(() => {
    dispatch(fetchFavorites())
  }, [dispatch])

  const handleCloseModalDetail = () => {
    setOpenModalDetail(false);
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

  const handleRemoveFavorite = (adoptId) => {
    const isFav = favorites.find( fav => fav.adoption_id === adoptId );
    dispatch(deleteFavorite(isFav.id))
  }

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
      <GridList cellHeight={400} cols={4} className={styles.gridList} spacing={20} style={{ marginTop: '2rem' }}>
        <GridListTile key="Subheader-adoption" cols={4} style={{ height: 'auto' }}>
          <ListSubheader component="div">
            My Pet Favorites
          </ListSubheader>
        </GridListTile>
        {
          favorites.map(fav => (
            <GridListTile className={styles.gridListTile} key={fav.id}>
              <img src={fav.Adoption.image_url} alt={fav.Adoption.name} />
              <CardBarTile
                favorites={favorites}
                pet={fav.Adoption}
                handleDetailAdopt={handleDetailAdopt}
                handleRemoveFavorite={handleRemoveFavorite}
              />
            </GridListTile>
          ))
        }
      </GridList>
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
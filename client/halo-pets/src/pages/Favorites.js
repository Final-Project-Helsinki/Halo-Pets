import React,  { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  Container,
  Grid,
  GridList,
  GridListTile,
  Typography,
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFavorite, fetchFavorites } from '../store/actions/favoriteAction';
import Loading from '../components/Loading';
import Error from '../components/Error';
import CardBarTile from '../components/CardBarTile';
import useStylesAdoption from '../helpers/styleAdoption';
import { fetchDetail } from '../store/actions/adoptionAction';
import ModalDetailAdopt from '../components/ModalDetailAdopt';
import Header from '../components/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import gridUseStyles from '../helpers/gridStyles'

const sections = [
  { title: 'Home', url: '/home' },
  { title: 'Adoption', url: '/adoption' },
  { title: 'My Pet Favorites', url: '/favorites' },
  { title: 'Health Care', url: '/healthcare' },
];

export default function FavoritesPage() {
  const styles = useStylesAdoption();
  const gridClasses = gridUseStyles();
  const [openModalDetail, setOpenModalDetail] = useState(false);
  const [petDetail, setPetDetail] = useState({});

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
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="My Pet Favorites" sections={sections} />
        <main>
          <Card className={gridClasses.rootCard}>
            <CardContent>
              <Grid container className={gridClasses.root} spacing={4} justify="space-around">
                <GridList cellHeight={400} cols={4} className={styles.gridList} spacing={20} style={{ marginTop: '2rem', paddingLeft: 2 }}>
                  <GridListTile key="Subheader-adoption" cols={4} style={{ height: 'auto' }}>
                    <Typography variant="h5" style={{ textAlign: 'center', color: '#113461' }}><b>My Pet Favorites</b></Typography>
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
              </Grid>
            </CardContent>
          </Card>
        </main>
      </Container>
      {/* <Footer title="Footer" description="Something here to give the footer a purpose!" /> */}
    </React.Fragment>
  );

  // return (
  //   <>
  //   <div className={classes.root}>
  //     <AppBar handleMainOpen={handleMainOpen}/>
  //     <main
  //       className={clsx(classes.content, {
  //         [classes.contentShift]: open
  //       })}
  //     >
  //     <DrawerHeader/>
  //     <GridList cellHeight={400} cols={4} className={styles.gridList} spacing={20} style={{ marginTop: '2rem' }}>
  //       <GridListTile key="Subheader-adoption" cols={4} style={{ height: 'auto' }}>
  //         <ListSubheader component="div">
  //           My Pet Favorites
  //         </ListSubheader>
  //       </GridListTile>
  //       {
  //         favorites.map(fav => (
  //           <GridListTile className={styles.gridListTile} key={fav.id}>
  //             <img src={fav.Adoption.image_url} alt={fav.Adoption.name} />
  //             <CardBarTile
  //               favorites={favorites}
  //               pet={fav.Adoption}
  //               handleDetailAdopt={handleDetailAdopt}
  //               handleRemoveFavorite={handleRemoveFavorite}
  //             />
  //           </GridListTile>
  //         ))
  //       }
  //     </GridList>
  //     {
  //       Object.keys(petDetail).length === 0 ? <div></div> :
  //       (
  //         <ModalDetailAdopt
  //           open={openModalDetail}
  //           pet={petDetail}
  //           handleCloseModalDetail={handleCloseModalDetail}
  //         />
  //       )
  //     }
  //     </main>
  //   </div>
  //   <Footer />
  //   </>
  // )
}
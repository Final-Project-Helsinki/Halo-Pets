import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardMedia,
  Tooltip,
  IconButton,
  GridListTileBar,
  Modal,
  Fade,
  Backdrop,
  CardContent,
  Typography
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import TextInfoContent from '@mui-treasury/components/content/textInfo';
// import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
// import { GET_MOVIE_BY_ID } from '../graphql/movies';
// import { GET_FAVORITES } from '../graphql/index';
// import { cache } from '../config/index';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import Error from '../components/Error';
// import Loading from '../components/Loading';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  rootCard: {
    margin: 'auto',
    borderRadius: theme.spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    width: 1000,
    height: 540,
    overflow: 'initial',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: theme.spacing(2),
    },
  },
  media: {
    width: '60%',
    zIndex: 2,
    // marginLeft: 'auto',
    // marginRight: 'auto',
    marginTop: theme.spacing(-3),
    height: 0,
    paddingBottom: '48%',
    borderRadius: theme.spacing(2),
    backgroundColor: 'white',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      width: '60%',
      marginLeft: theme.spacing(3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
  },
  actionBar: {
    background: 'white',
    borderRadius: theme.spacing(2),
  },
  icon: {
    color: 'white',
    opacity: 0.8
  },
  iconIsFav: {
    color: '#f50057',
    opacity: 0.8
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    color: '#aaa',
    float: 'right',
    fontSize: 28,
    fontWeight: 'bold',
    "&:hover": {
      color: 'black',
      textDecoration: 'none',
      cursor: 'pointer'
    },
    marginRight: '1rem'
  },
}));

export default function MovieDetail({ open, pet, handleCloseModalDetail }) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleCloseModalDetail}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
      <Fade in={open}>
        <Card className={classes.rootCard}>
          <CardMedia
            className={classes.media}
            image={pet.image_url}
          />
          <GridListTileBar
            title=""
            titlePosition="top"
            actionIcon={
              <>
              <span className={classes.close} onClick={handleCloseModalDetail}>&times;</span>
              </>
            }
            actionPosition="right"
            className={classes.actionBar}
          />
          <CardContent style={{ width: '60%'}}>
            <Typography>{pet.name}</Typography>
          </CardContent>
        </Card>
      </Fade>
      </Modal>
    </div>
  )
}
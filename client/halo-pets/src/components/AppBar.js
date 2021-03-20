import React,  { useState } from 'react'
import clsx from 'clsx';
import {
  makeStyles,
  useTheme,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  CssBaseline
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { Link, NavLink } from 'react-router-dom'
import useStyles from '../helpers/style'

export default function Test(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    props.handleMainOpen(true)
  };

  const handleDrawerClose = () => {
    setOpen(false);
    props.handleMainOpen(false)
  };



  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <NavLink style={{textDecoration: "none"}} to="/home">
            <ListItem>
              <ListItemText button>Home</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink style={{textDecoration: "none"}} to="/home">
            <ListItem>
              <ListItemText button>My Favorites</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink style={{textDecoration: "none"}} to="/healthcare">
            <ListItem>
              <ListItemText button>Health Care</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink style={{textDecoration: "none"}} to="/adoption">
            <ListItem>
              <ListItemText button>Adoption</ListItemText>
            </ListItem>
          </NavLink>
        </List>
        <Divider />
      </Drawer>
    </>
  )
}
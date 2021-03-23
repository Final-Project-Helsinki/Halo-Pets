import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router';
import logo from '../assets/logo.png'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  buttonEndChat: {
    borderColor: '#b54933',
    color: '#b54933',
    borderWidth: 1.5,
    marginRight: 16,
    '&:hover, &$focusVisible': {
      backgroundColor: '#b54933',
      color: 'white'
    },
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const history = useHistory();
  function handleLogout(event) {
    // if (anchorRef.current && anchorRef.current.contains(event.target)) {
    //   return;
    // }

    // setOpen(false);
    localStorage.clear()
    history.push('/')
  }

  const endChat = (e) => {
    e.preventDefault();
    history.push('/home')
  }

  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar} style={{ backgroundColor: '#54bba3' }}>
        {/* <Button size="small"></Button> */}
        <img src={logo} style={{ width: '5%', height: '5%' }} />
        <Typography
          component="h2"
          variant="h5"
          // color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
          style={{ color: 'white' }}
        >
          {title}
        </Typography>
        {
          history.location.pathname.includes('/chat') ? (
          <Button variant="outlined" size="small" type="submit" onClick={endChat} className={classes.buttonEndChat}>End Chat</Button>): <div></div>
        }
        <Button variant="outlined" size="small" onClick={handleLogout} style={{ backgroundColor: '#b54933', color: 'white' }}>
          Logout
        </Button>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <NavLink
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            to={section.url}
            className={classes.toolbarLink}
            style={{ cursor: 'pointer', textDecoration: 'none', color: 'black' }}
            activeStyle={{
              borderBottom: '4px solid #54bba3',
            }}
          >
            {section.title}
          </NavLink>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
import React from 'react';
import useStyles from '../helpers/style'
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button
} from '@material-ui/core'
import {useHistory} from 'react-router-dom'


export default function Navbar() {
  const classes = useStyles();
  const history = useHistory()

  function handleLogout() {
    localStorage.clear()
    history.push('/')
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.root} style={{justifyContent: 'space-between'}}>
          <div>
            <Typography variant="h6" noWrap>
              Doctor
            </Typography>
          </div>
          <div>
            <Button onClick={handleLogout}>
              <Typography variant="h6">
                Logout
              </Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

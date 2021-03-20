import React from 'react';
import useStyles from '../helpers/style'
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemText,
  Button
} from '@material-ui/core'


export default function Navbar() {
  const classes = useStyles();

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
            <Button onCLick={() => alert('logout')}>
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

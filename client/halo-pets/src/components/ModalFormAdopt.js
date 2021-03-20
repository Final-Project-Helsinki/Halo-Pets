import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Modal,
  Backdrop,
  Fade,
  TextField,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Button,
  InputLabel,
  MenuItem,
  Select,
  Fab
} from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 600,
    height: 600,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflowY: 'hidden',
  },
  rootForm: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing(1),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
  },
}));

export default function ModalFormAdopt({ title, open, formAdopt, handleCloseModalForm, handleChangeForm, handleSubmitForm, fileName }) {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleCloseModalForm}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Card className={classes.root}>
          <CardHeader
            title={title}
          />
          <CardContent>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid container item xs={12}>
              <form className={classes.rootForm}>
                <Grid item xs={12} style={{ marginBottom: 10 }}>
                  <TextField
                    name="name"
                    value={formAdopt.name}
                    label="Name"
                    variant="outlined"
                    color="secondary"
                    onChange={handleChangeForm}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} style={{ marginBottom: 10 }}>
                  <InputLabel>Species</InputLabel>
                  <Select
                    name="species"
                    value={formAdopt.species}
                    onChange={handleChangeForm}
                    className={classes.textField}
                    required
                  >
                    <MenuItem value="dog">Dog</MenuItem>
                    <MenuItem value="cat">Cat</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} style={{ marginBottom: 10 }}>
                  <InputLabel>Gender</InputLabel>
                  <Select
                    name="gender"
                    value={formAdopt.gender}
                    onChange={handleChangeForm}
                    className={classes.textField}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12} style={{ marginBottom: 10 }}>
                  <TextField
                    id="date"
                    label="Date of Birth"
                    type="date"
                    defaultValue={formAdopt.dob}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} style={{ marginBottom: 10 }}>
                  <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <CameraAltIcon />
                    </Grid>
                    <Grid item>
                      <TextField
                        value={fileName}
                      />
                    </Grid>
                    <Grid item>
                      <label htmlFor="upload-photo" style={{ marginBottom: 2 }}>
                        <input
                          style={{ display: 'none' }}
                          id="upload-photo"
                          name="upload-photo"
                          type="file"
                          accept="image/*"
                          onChange={handleChangeForm}
                          className={classes.textField}
                        />

                        <Button
                          size="small"
                          component="span"
                          aria-label="add"
                          variant="extended"
                          color="primary"
                          variant="contained"
                        >
                          Upload Photo
                        </Button>
                      </label>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
          <Grid container item xs={12} direction="row" justify="flex-end" style={{ marginTop: 32 }}>
            <Button variant="contained" color="secondary" onClick={handleSubmitForm} style={{ marginRight: 8 }}>
              Save
            </Button>
            <Button onClick={handleCloseModalForm}>
              Cancel
            </Button>
          </Grid>
          </CardContent>
        </Card>
      </Fade>
    </Modal>
  )
}
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
  Chip,
  Input,
  InputLabel,
  MenuItem,
  Select
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 600,
    height: 600,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflowY: 'scroll',
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
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(tag, tags, theme) {
  return {
    fontWeight:
      tags.indexOf(tag) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const tagsSelect = [
  'Romance', 'Comedy', 'Thriller', 'Horror', 'Action', 'Family', 'Fantasy', 'Mystery', 'Documentary', 'Adventure',
  'Musicals', 'Crime', 'War', 'Animations', 'Kids', 'Disney',
  'Western', 'Japan', 'Korean', 'Asian', 'Thailand', 'Taiwan',
  'Popular', 'High School', 'Cinematography'
];

export default function ModalFormAdopt({ title, open, formAdopt, handleCloseModalForm, handleChangeForm, handleSubmitForm }) {
  const classes = useStyles();
  const theme = useTheme();

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
                  <TextField
                    name="species"
                    value={formAdopt.species}
                    label="Species"
                    variant="outlined"
                    color="secondary"
                    rows="7"
                    onChange={handleChangeForm}
                    multiline
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} style={{ marginBottom: 10 }}>
                  <TextField
                    name="poster_path"
                    value={formAdopt.poster_path}
                    label="Poster Path Url"
                    variant="outlined"
                    color="secondary"
                    onChange={handleChangeForm}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} style={{ marginBottom: 10 }}>
                  <TextField
                    name="popularity"
                    value={formAdopt.popularity}
                    label="Rating Popularity"
                    variant="outlined"
                    color="secondary"
                    type="number"
                    onChange={handleChangeForm}
                    inputProps={{ step: 0.1, min: 0, max: 10 }}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} style={{ marginTop: 16 }}>
                  <InputLabel id="demo-mutiple-chip-label">Tags</InputLabel>
                  {/* <Select
                    labelId="demo-mutiple-chip-label"
                    name="tags"
                    value={formAdopt.tags}
                    fullWidth
                    multiple
                    onChange={handleChangeForm}
                    input={<Input id="select-multiple-chip" />}
                    renderValue={(selected) => (
                      <div className={classes.chips}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} className={classes.chip} />
                        ))}
                      </div>
                    )}
                    MenuProps={MenuProps}
                  >
                    {tagsSelect.map((tag) => (
                      <MenuItem key={tag} value={tag} style={getStyles(tag, formAdopt.tags, theme)}>
                        {tag}
                      </MenuItem>
                    ))}
                  </Select> */}
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
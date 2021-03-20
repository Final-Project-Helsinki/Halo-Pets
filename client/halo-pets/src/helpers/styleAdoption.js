import { makeStyles } from '@material-ui/core'

const useStylesAdoption = makeStyles((theme) => ({
  gridList: {
    width: '100%',
    height: 'auto',
    overflow: 'hidden',
  },
  rootCard: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // overflowY: 'scroll',
    boxShadow: '0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.25)',
  },
  cardPetSpecies: {
    width: 300,
    height: 300,
    boxShadow: '0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.25)',
    marginRight: 30,
    marginLeft: 30
  },
  gridListTile: {
    // cursor: 'pointer',
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    transition: theme.transitions.create("transform 0.15s ease-in-out")
  },
  button: {
    margin: theme.spacing(1),
  },
}))

export default useStylesAdoption
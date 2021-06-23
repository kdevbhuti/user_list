import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  pagination:{
    display: 'flex',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    maxHeight: 500,
  },
});

export default useStyles;

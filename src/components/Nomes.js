import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    fontFamily: "Parisienne, cursive",
  },
});

function Nomes(props) {
  const classes = useStyles();
  return (
    <Typography variant="h4" align="center" className={classes.root} >
        {props.nomes}
    </Typography>
  );
}

export default Nomes;
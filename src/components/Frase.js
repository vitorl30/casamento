import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    fontFamily: "Parisienne, cursive",
    fontSize: 22,
    lineHeight: '24px',
  },
});

function Frase(props) {
  const classes = useStyles();
  return (
    <Typography variant="subtitle1" align="center" className={classes.root} >
        {props.frase}
    </Typography>
  );
}

export default Frase;
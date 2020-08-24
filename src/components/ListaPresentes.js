import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import PresenteItem from './PresenteItem'

const useStyles = makeStyles((theme) =>({
  root: {
    fontFamily: "Parisienne, cursive",
    fontSize: 35,
    fontWeight: 700,
    lineHeight: '24px',
  },
  box: {
    marginTop: 35,
  },
  listaItemBox:{
    display: "flex",
    alignItems:"center"
  },
  textoPresenteChack: {
    textDecoration: "line-through",
  },
  textoPresente: {
    textDecoration: "none",
  }
}));

function ListaPresentes() {
  const classes = useStyles();
  return (
    <div className={classes.box}>
      <Typography variant="h2" align="center" className={classes.root} >
        Lista de Presentes
    </Typography>
      <Grid container spacing={1}>
      <PresenteItem presente="Presente 1" marcado={false} />
      <PresenteItem presente="Presente 2" marcado={true} />
      <PresenteItem presente="Presente 3" marcado={true} />
      <PresenteItem presente="Presente 4" marcado={false} />
      <PresenteItem presente="Presente 5" marcado={true} />
      <PresenteItem presente="Presente 6" marcado={false} />
      </Grid>
    </div>
  );
}

export default ListaPresentes;
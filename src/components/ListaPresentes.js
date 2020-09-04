import React, {useState, useEffect} from 'react';
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
  const [listaPresente, setListaPresente] = useState([])
  const classes = useStyles();

  useEffect(()=>{
    async function buscaPresentes(){
      await fetch("http://api.digiagenda.com.br/cinthia/lista")
      .then(function(response) {
        return response.json()
      }).then(function(resp){
        setListaPresente(resp)
      })
    } buscaPresentes()
  })

  return (
    <div className={classes.box}>
      <Typography variant="h2" align="center" className={classes.root} >
        Lista de Presentes
    </Typography>
      <Grid container spacing={1}>
      {listaPresente.map(item => <PresenteItem key={item._id} presente={item.presente} marcado={item.marcado}  idPresente={item._id}/>)}
      </Grid>
    </div>
  );
}

export default ListaPresentes;
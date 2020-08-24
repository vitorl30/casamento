import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite'; 

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import FormPresent from './FormPresent'


const useStyles = makeStyles((theme) => ({
  listaItemBox:{
    display: "flex",
    alignItems:"center"
  },
  textoPresenteChack: {
    textDecoration: "line-through",
  },
  textoPresente: {
    textDecoration: "none",
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(1)
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalForm:{
    margin: theme.spacing(1)
  }
}));



function PresenteItem(props) {
  const classes = useStyles();
  
  const [open, setOpen] = React.useState(false);



  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  function handleClick(){
      console.log(`Clicou em Marcar ${props.presente}`)
      if(props.marcado){

      }
      handleOpen()
  }

  return (
      <>
        <Grid item xs={6}  className={classes.listaItemBox} onClick={handleClick} >
          <Checkbox icon={<FavoriteBorder />} checked={props.marcado} checkedIcon={<Favorite />} name="checkedH" />
          <Typography className={props.marcado ? classes.textoPresenteChack : classes.textoPresente}>
                {props.presente}
          </Typography>
        </Grid>

<div>
<Modal
  aria-labelledby="transition-modal-title"
  aria-describedby="transition-modal-description"
  className={classes.modal}
  open={open}
  onClose={handleClose}
  closeAfterTransition
  BackdropComponent={Backdrop}
  BackdropProps={{
    timeout: 500,
  }}
>
  <Fade in={open}>
    <div className={classes.paper}>
    <FormPresent presente={props.presente} marcado={props.marcado} />
    </div>
  </Fade>
</Modal>
</div>

</>

  );
}

export default PresenteItem;
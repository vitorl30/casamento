import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    modalForm:{
      margin: theme.spacing(1)
    }
  }));

function FormPresent(props){
    const classes = useStyles();
    const [nome, setNome] = React.useState("");
    const [erro, setErro] = React.useState(false);

    function enviar(event){
        event.preventDefault()

        if(!nome){
            setErro(true)
        } else{
            console.log(`O Convidado ${nome} enviou o presente ${props.presente}`)
        }
    }


    if(props.marcado){
    return (
        <>
    <Typography variant="h6" >
        Alguém já escolheu este presente, você deseja dar este presente também?
    </Typography>
      <form  className={classes.modalForm} onSubmit={enviar} >
      <TextField 
      id="nome" 
      label="Digite Seu Nome" 
      variant="outlined" 
      fullWidth
      onFocus={()=>setErro(false)}
      value={nome}
      onChange={(event)=> setNome(event.target.value)}
      error={erro}
      />
      <Button variant="contained" color="primary" fullWidth style={{marginTop:10}} type="submit" >
            Escolher Este Presente
      </Button>
      </form>
      </>
    )
    }
    else{
    return (
        <>
        <Typography variant="h6" align="center" >
               Você escolheu {props.presente}
          </Typography>
      <form  className={classes.modalForm} onSubmit={enviar} >
      <TextField 
      id="nome" 
      label="Digite Seu Nome" 
      variant="outlined" 
      fullWidth
      onFocus={()=>setErro(false)}
      value={nome}
      onChange={(event)=> setNome(event.target.value)}
      error={erro}
      />
      <Button variant="contained" color="primary" fullWidth style={{marginTop:10}} type="submit" >
            Escolher Este Presente
      </Button>
      </form>
      </>
    )
    }
    
}

export default FormPresent;
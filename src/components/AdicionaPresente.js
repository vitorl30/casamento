import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

export default function AdicionaPresente() {
const [presente, setPresente] = useState('') 

   async function handleClick() {
        await fetch("http://api.digiagenda.com.br/cinthia/criapresente", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ presente: presente })
        })
        .then((resp)=>{console.log(resp)})
        .catch((error)=>{console.log(error)})

    }
    return (
        <>
            <TextField
                id="outlined-basic"
                label="Nome do Presente"
                variant="outlined" 
                value={presente}
                onChange={(event)=> setPresente(event.target.value)}
                />
            <Button
                variant="contained"
                color="primary"
                startIcon={<SendIcon />}
                onClick={handleClick}
            />
        </>
    )
}
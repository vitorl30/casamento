import React, {useState, useEffect} from 'react';
import Container from '@material-ui/core/Container';
import ListaPresentesAdmin from './ListaPresentesAdmin'
import AdicionaPresente from './AdicionaPresente'


function Admin(){
const [listaPresente, setListaPresente] = useState([]);

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
        <Container>
            <h1>Lista de Presentes</h1>
            <AdicionaPresente />
            {listaPresente.map(item => <ListaPresentesAdmin key={item._id} presente={item.presente} marcado={item.marcado} convidado={item.convidado} />)}
            
        </Container>
    )
};

export default Admin
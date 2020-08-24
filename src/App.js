import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';

import Foto from './components/Foto'
import Nomes from './components/Nomes'
import Frase from './components/Frase'
import ListaPresentes from './components/ListaPresentes'
import ConfirmaPresenca from './components/ConfirmaPresenca'
import MensagemParaOsNoivos from './components/MensagemParaOsNoivos'

function App() {
  return (
    <Container maxWidth="sm" >
    <Foto />
    <Nomes nomes="Henrique & Cinthia" />
    <Frase frase="Então viveremos um para o outro e ambos para a glória de Deus" />
    <ListaPresentes />
    </Container>
  );
}

export default App;
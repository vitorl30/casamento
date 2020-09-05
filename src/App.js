import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Admin from './components/Admin'
import Container from '@material-ui/core/Container';

import Foto from './components/Foto'
import Nomes from './components/Nomes'
import Frase from './components/Frase'
import ListaPresentes from './components/ListaPresentes'
import ConfirmaPresenca from './components/ConfirmaPresenca'
import MensagemParaOsNoivos from './components/MensagemParaOsNoivos'

function App() {
return(
<Router>
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/admin">
      <Admin />
    </Route>
    <Route path="/*">
      <Erro />
    </Route>
  </Switch>
</Router>
)

function Home(){
  return (
    <Container maxWidth="sm" >
    <Foto />
    <Nomes nomes="Henrique & Cinthia" />
    <Frase frase="Então viveremos um para o outro e ambos para a glória de Deus" />
    <ListaPresentes />
    </Container>
  );
}

function Erro(){
  return (
    <h1>Erro</h1>
  )
}
}

export default App;
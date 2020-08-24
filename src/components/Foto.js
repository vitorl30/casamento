import React from 'react';
import Container from '@material-ui/core/Container';

import foto from '../assets/image/casal.jpg'

function Foto() {
  return (
    <Container maxWidth="sm">
      <img src={foto} alt="Casal" style={{width:'100%', boxShadow: '1px 1px 10px #757575'}} />
    </Container>
  );
} 

export default Foto;
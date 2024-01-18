import React from 'react';
import '../styles/Mostrador.css';
function Mostrador({ minutos, segundos }) {
  return (
    <div className='mostrador'>
      <h1>{minutos}:{segundos}</h1>
    </div>
  );
}

export default Mostrador;
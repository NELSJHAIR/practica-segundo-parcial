import React from 'react';
import "../styles/Barra.css";
/*quiero que la barra esté en medio y tenga un redondeo de 10px*/

function Barra({ valor }) {
  const barraStyle = {
    width: `${valor}%`,
    height: '20px',
    backgroundColor: 'blue',
    transition: 'width 0.3s ease-in-out',
  };

  return (
    <div className='container-bar'>
      <div className='bar'>
        <div style={barraStyle}>

        </div>
      </div>
    </div>
  );
}

export default Barra;
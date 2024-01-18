import React from 'react';
import '../styles/Entrada.css';	
function Entrada({ valor, actualizarValor }) {
  const handleChange = (event) => {
    let nuevoValor = event.target.value;
    if (nuevoValor < 0) {
      nuevoValor = 0;
    } else if (nuevoValor > 100) {
      nuevoValor = 100;
    }
    actualizarValor(nuevoValor);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      actualizarValor((prevValor) => {
        let nuevoValor = prevValor + 1;
        if (nuevoValor > 100) {
          nuevoValor = 100;
        }
        return nuevoValor;
      });
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      actualizarValor((prevValor) => {
        let nuevoValor = prevValor - 1;
        if (nuevoValor < 0) {
          nuevoValor = 0;
        }
        return nuevoValor;
      });
    }
  };

  return (
    <div className="entrada">
      <input
        className='entrada-input'
        type="number"
        value={valor}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        min="0"
        max="100"
      />
    </div>
  );
}

export default Entrada;
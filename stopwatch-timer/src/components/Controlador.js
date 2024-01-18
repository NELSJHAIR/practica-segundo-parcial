import React from 'react';
import '../styles/Controlador.css';
function Controlador({ corriendo, onStart, onStop, onReset }) {
  return (
    <div className='controlador'>
      <button onClick={onStart} disabled={corriendo}>
        Start
      </button>
      <button onClick={onStop} disabled={!corriendo}>
        Stop
      </button>
      <button onClick={onReset} disabled={corriendo}>
        Reset
      </button>
    </div>
  );
}

export default Controlador;
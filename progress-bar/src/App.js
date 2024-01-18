import React, { useState } from 'react';
import Entrada from './components/Entrada';
import Barra from './components/Barra';
import './App.css';

function App() {
  const [valor, setValor] = useState(0);

  const actualizarValor = (nuevoValor) => {
    setValor(nuevoValor);
  };

  return (
    <div className="App">
      <h1>ProgressBar</h1>
      <div className='container'> 
        <Entrada valor={valor} actualizarValor={actualizarValor} />
        <div className='container-barra'> 
          <Barra valor={valor} />
        </div>
      </div>
    </div>
  );
}

export default App;
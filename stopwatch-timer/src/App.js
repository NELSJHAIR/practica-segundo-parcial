import React, { useState, useEffect } from 'react';
import Mostrador from './components/Mostrador';
import Controlador from './components/Controlador';
import './App.css';

function App() {
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [corriendo, setCorriendo] = useState(false);

  useEffect(() => {
    const timerID = setInterval(() => {
      if (corriendo) {
        setSegundos((prevSegundos) => {
          let nuevosSegundos = prevSegundos + 1;
          let nuevosMinutos = minutos;

          if (nuevosSegundos === 60) {
            nuevosSegundos = 0;
            nuevosMinutos++;
          }
          
          setMinutos(nuevosMinutos);
          return nuevosSegundos;
        });
      }
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, [corriendo, minutos]);

  const startTimer = () => {
    setCorriendo(true);
  };

  const stopTimer = () => {
    setCorriendo(false);
  };

  const resetTimer = () => {
    setMinutos(0);
    setSegundos(0);
    setCorriendo(false);
  };

  return (
    <div className='App'>
      <h1>Timer</h1>
      <Mostrador minutos={minutos} segundos={segundos} />
      <Controlador
        corriendo={corriendo}
        onStart={startTimer}
        onStop={stopTimer}
        onReset={resetTimer}
      />
    </div>
  );
}

export default App;
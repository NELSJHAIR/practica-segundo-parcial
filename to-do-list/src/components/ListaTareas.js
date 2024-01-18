import React, { useState } from 'react';
import Tarea from './Tarea';
import '../styles/ListaTareas.css';
function ListaTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const handleAgregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      const nuevaTareaObj = {
        descripcion: nuevaTarea,
        completada: false
      };
      setTareas([...tareas, nuevaTareaObj]);
      setNuevaTarea('');
    }
  };

  const handleBorrarTarea = (index) => {
    const tareasActualizadas = [...tareas];
    tareasActualizadas.splice(index, 1);
    setTareas(tareasActualizadas);
  };

  const handleEditarTarea = (index, descripcion) => {
    const tareasActualizadas = [...tareas];
    tareasActualizadas[index].descripcion = descripcion;
    setTareas(tareasActualizadas);
  };
    
  return (
    <div>
        <div className='lista-tareas-container'>
            <h1 className='lista-tareas-titulo'>Lista de Tareas</h1>
            <input className='lista-tareas-input'
                type="text"
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
            />
            <button className ='lista-tareas-boton' onClick={handleAgregarTarea}>Agregar Tarea</button>
            <ul>
                {tareas.map((tarea, index) => (
                <Tarea
                    key={index}
                    tarea={tarea}
                    index={index}
                    handleBorrarTarea={handleBorrarTarea}
                    handleEditarTarea={handleEditarTarea}
                />
                ))}
            </ul>
        </div>
      
    </div>
  );
}

export default ListaTareas;
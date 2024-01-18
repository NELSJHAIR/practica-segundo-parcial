import React, { useState } from 'react';
import '../styles/Tareas.css';
function Tarea({ tarea, index, handleBorrarTarea, handleEditarTarea }) {
  const [editando, setEditando] = useState(false);
  const [descripcionEditada, setDescripcionEditada] = useState(tarea.descripcion);

  const handleGuardarEdicion = () => {
    handleEditarTarea(index, descripcionEditada);
    setEditando(false);
  };

  return (
    <div className='tarea-container'>
        <li>
        {editando ? (
            <>
            <input
                className='tarea-editar-input'
                type="text"
                value={descripcionEditada}
                onChange={(e) => setDescripcionEditada(e.target.value)}
            />
            <button onClick={handleGuardarEdicion}>Guardar</button>
            </>
        ) : (
            <>
            <span className='tarea-descripcion'>{tarea.descripcion}</span>
            <button className='tarea-boton' onClick={() => setEditando(true)}>Editar</button>
            <button className='tarea-boton' onClick={() => handleBorrarTarea(index)}>Borrar</button>
            </>
        )}
        </li>
    </div>
  );
}

export default Tarea;
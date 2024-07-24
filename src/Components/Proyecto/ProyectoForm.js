import React, { useState } from 'react';
import proyectoService from '../../services/proyectoService';

function ProyectoForm() {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [fechaPresentacion, setFechaPresentacion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await proyectoService.createProyecto({ titulo, descripcion, fechaPresentacion });
      alert('Proyecto creado exitosamente');
    } catch (error) {
      alert('Error al crear el proyecto');
    }
  };

  return (
    <div>
      <h2>Nuevo Proyecto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título</label>
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div>
          <label>Descripción</label>
          <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </div>
        <div>
          <label>Fecha de Presentación</label>
          <input type="date" value={fechaPresentacion} onChange={(e) => setFechaPresentacion(e.target.value)} />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default ProyectoForm;

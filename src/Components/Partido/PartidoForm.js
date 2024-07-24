import React, { useState } from 'react';
import partidoService from '../../services/partidoService';

function PartidoForm() {
  const [nombre, setNombre] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await partidoService.createPartido({ nombre });
      alert('Partido creado exitosamente');
    } catch (error) {
      alert('Error al crear el partido');
    }
  };

  return (
    <div>
      <h2>Nuevo Partido</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default PartidoForm;

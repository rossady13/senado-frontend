import React, { useState, useEffect } from 'react';
import senadorService from '../../services/senadorService';
import partidoService from '../../services/partidoService';

function SenadorForm() {
  const [nombres, setNombres] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [partidoId, setPartidoId] = useState('');
  const [partidos, setPartidos] = useState([]);

  useEffect(() => {
    async function fetchPartidos() {
      const result = await partidoService.getPartidos();
      setPartidos(result);
    }
    fetchPartidos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await senadorService.createSenador({ nombres, departamento, partido: { id: partidoId } });
      alert('Senador creado exitosamente');
    } catch (error) {
      alert('Error al crear el senador');
    }
  };

  return (
    <div>
      <h2>Nuevo Senador</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombres</label>
          <input type="text" value={nombres} onChange={(e) => setNombres(e.target.value)} />
        </div>
        <div>
          <label>Departamento</label>
          <input type="text" value={departamento} onChange={(e) => setDepartamento(e.target.value)} />
        </div>
        <div>
          <label>Partido</label>
          <select value={partidoId} onChange={(e) => setPartidoId(e.target.value)}>
            {partidos.map(partido => (
              <option key={partido.id} value={partido.id}>{partido.nombre}</option>
            ))}
          </select>
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default SenadorForm;

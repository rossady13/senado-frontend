import React, { useState, useEffect } from 'react';
import votoService from '../../services/votoService';
import senadorService from '../../services/senadorService';
import proyectoService from '../../services/proyectoService';

function VotoForm() {
  const [senadorId, setSenadorId] = useState('');
  const [proyectoId, setProyectoId] = useState('');
  const [voto, setVoto] = useState('');
  const [senadores, setSenadores] = useState([]);
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    async function fetchSenadores() {
      const result = await senadorService.getSenadores();
      setSenadores(result);
    }
    async function fetchProyectos() {
      const result = await proyectoService.getProyectos();
      setProyectos(result);
    }
    fetchSenadores();
    fetchProyectos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await votoService.createVoto({ senador: { id: senadorId }, proyecto: { id: proyectoId }, voto });
      alert('Voto registrado exitosamente');
    } catch (error) {
      alert('Error al registrar el voto');
    }
  };

  return (
    <div>
      <h2>Nuevo Voto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Senador</label>
          <select value={senadorId} onChange={(e) => setSenadorId(e.target.value)}>
            {senadores.map(senador => (
              <option key={senador.id} value={senador.id}>{senador.nombres}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Proyecto</label>
          <select value={proyectoId} onChange={(e) => setProyectoId(e.target.value)}>
            {proyectos.map(proyecto => (
              <option key={proyecto.id} value={proyecto.id}>{proyecto.titulo}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Voto</label>
          <input type="text" value={voto} onChange={(e) => setVoto(e.target.value)} />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default VotoForm;

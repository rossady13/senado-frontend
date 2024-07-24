import React, { useEffect, useState } from 'react';
import proyectoService from '../../services/proyectoService';

function ProyectoList() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await proyectoService.getProyectos();
      setProyectos(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Proyectos</h2>
      <ul>
        {proyectos.map(proyecto => (
          <li key={proyecto.id}>{proyecto.titulo} - {proyecto.descripcion}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProyectoList;

import React, { useEffect, useState } from 'react';
import partidoService from '../../services/partidoService';

function PartidoList() {
  const [partidos, setPartidos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await partidoService.getPartidos();
      setPartidos(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Partidos Políticos</h2>
      <ul>
        {partidos.map(partido => (
          <li key={partido.id}>{partido.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default PartidoList;

import React, { useEffect, useState } from 'react';
import votoService from '../../services/votoService';

function VotoList() {
  const [votos, setVotos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await votoService.getVotos();
      setVotos(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Votos</h2>
      <ul>
        {votos.map(voto => (
          <li key={`${voto.senador.id}-${voto.proyecto.id}`}>
            {voto.senador.nombres} - {voto.proyecto.titulo}: {voto.voto}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VotoList;

import React, { useEffect, useState } from 'react';
import senadorService from '../../services/senadorService';

function SenadorList() {
  const [senadores, setSenadores] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await senadorService.getSenadores();
      setSenadores(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Senadores</h2>
      <ul>
        {senadores.map(senador => (
          <li key={senador.id}>{senador.nombres} - {senador.departamento}</li>
        ))}
      </ul>
    </div>
  );
}

export default SenadorList;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import PartidoList from './Components/Partido/PartidoList';
import PartidoForm from './Components/Partido/PartidoForm';
import SenadorList from './Components/Senador/SenadorList';
import SenadorForm from './Components/Senador/SenadorForm';
import ProyectoList from './Components/Proyecto/ProyectoList';
import ProyectoForm from './Components/Proyecto/ProyectoForm';
import VotoList from './Components/Voto/VotoList';
import VotoForm from './Components/Voto/VotoForm';






function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/partidos" component={PartidoList} />
          <Route path="/partido-form" component={PartidoForm} />
          <Route path="/senadores" component={SenadorList} />
          <Route path="/senador-form" component={SenadorForm} />
          <Route path="/proyectos" component={ProyectoList} />
          <Route path="/proyecto-form" component={ProyectoForm} />
          <Route path="/votos" component={VotoList} />
          <Route path="/voto-form" component={VotoForm} />
          <h1>hollsksnc</h1>

      </Routes>    
    </Router>
  );
}

export default App;


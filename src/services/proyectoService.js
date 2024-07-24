import axios from 'axios';

const API_URL = 'http://localhost:8080/api/proyectos/';

const getProyectos = () => {
  return axios.get(API_URL);
};

const createProyecto = (proyecto) => {
  return axios.post(API_URL, proyecto);
};

export default {
  getProyectos,
  createProyecto,
};

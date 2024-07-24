import axios from 'axios';

const API_URL = 'http://localhost:8080/api/partidos/';

const getPartidos = () => {
  return axios.get(API_URL);
};

const createPartido = (partido) => {
  return axios.post(API_URL, partido);
};

export default {
  getPartidos,
  createPartido,
};

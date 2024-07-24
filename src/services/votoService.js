import axios from 'axios';

const API_URL = 'http://localhost:8080/api/votos/';

const getVotos = () => {
  return axios.get(API_URL);
};

const createVoto = (voto) => {
  return axios.post(API_URL, voto);
};

export default {
  getVotos,
  createVoto,
};

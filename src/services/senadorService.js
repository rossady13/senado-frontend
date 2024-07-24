import axios from 'axios';

const API_URL = 'http://localhost:8080/api/senadores/';

const getSenadores = () => {
  return axios.get(API_URL);
};

const createSenador = (senador) => {
  return axios.post(API_URL, senador);
};

export default {
  getSenadores,
  createSenador,
};

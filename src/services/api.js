import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rocketshoes-db.herokuapp.com/',
});

export default api;

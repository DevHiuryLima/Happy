import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.104:3333', //Pode mudar
});

export default api;
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://budget-tracker-mc.herokuapp.com'
});

export default instance;
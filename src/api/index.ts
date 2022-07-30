import axios from 'axios';

const instance = axios.create({
  timeout: 6000 * 10,
  withCredentials: true,
});

export default instance;

import axios from 'axios';

axios.defaults.baseURL = 'https://d-pog.com/api/v1/';
// axios.defaults.baseURL = 'http://5.9.121.164:8060/api/v1';
// axios.defaults.headers.common['Authorization'] = localStorage.access_token
//   ? localStorage.access_token
//   : '';

export default axios;

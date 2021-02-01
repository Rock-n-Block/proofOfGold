import axios from 'axios';

axios.defaults.baseURL = 'https://devgold.rocknblock.io/api/v1/';
// axios.defaults.headers.common['Authorization'] = localStorage.access_token
//   ? localStorage.access_token
//   : '';

export default axios;

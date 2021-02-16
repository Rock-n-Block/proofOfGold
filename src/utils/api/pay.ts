import axios from '../../core/axios';
export default {
  checkout: () => axios.post(`/payments/${localStorage.access_token}/`),
};

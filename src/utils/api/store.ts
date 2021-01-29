import axios from '../../core/axios';
export default {
  getProducts: () => axios.get('store'),
};

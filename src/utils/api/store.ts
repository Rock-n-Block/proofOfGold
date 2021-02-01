import axios from '../../core/axios';
export default {
  getProducts: () => axios.get('store'),
  getProduct: (id: number | string) => axios.get(`store/${id}`),
};

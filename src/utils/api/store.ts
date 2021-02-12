import axios from '../../core/axios';
export default {
  getProducts: () => axios.get('store'),
  getProduct: (id: number | string) => axios.get(`store/${id}`),
  sendReview: (data: any) => axios.post('store/review', data),
  search: (data: any) => axios.post('store/search', data),
  getCryptoAddresses: () =>
    axios.get(`/account/checkout_addresses/${localStorage.access_token}`),
};

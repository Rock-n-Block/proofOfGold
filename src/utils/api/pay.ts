import axios from '../../core/axios';

interface ICheckoutProduct {
  item_id: number;
  quantity: number;
}

export interface ICheckout {
  items: ICheckoutProduct[];
  currency: string;
  shipping_address?: any;
  paypal_id?: string;
}

export default {
  checkout: (data: ICheckout) =>
    axios.post(`payments/${localStorage.access_token}/`, data),
  getRates: () => axios.get('rates/'),
  checkOrderStatus: (id: number) => axios.get(`payments/active/${id}`),
};

import { types, flow } from 'mobx-state-tree';
import { storeApi } from '../utils/api';
const Addresses = types.model({
  btc_address: types.maybe(types.string),
  eth_address: types.maybe(types.string),
});

export const CheckoutStore = types
  .model({
    activePayment: types.string,
    addresses: types.maybe(Addresses),
    activeAddress: types.maybe(types.string),
  })
  .actions((self) => {
    const setActivePayment = (payment: string) => {
      self.activePayment = payment;
    };
    const clearActiveAddress = () => {
      self.activeAddress = '';
    };
    const getAddresses = flow(function* getAddresses() {
      try {
        const { data } = yield storeApi.getCryptoAddresses();

        self.addresses = data;
      } catch (err) {
        console.log(err, 'get crypto addresses');
      }
    });

    return { setActivePayment, getAddresses, clearActiveAddress };
  })
  .views((self) => ({
    get getActiveAddress() {
      if (self.activePayment === 'card') {
        return 'card';
      } else if (self.activePayment === 'usdc') {
        return self.addresses && self.addresses['eth_address'];
      } else if (self.activePayment === 'btc') {
        return self.addresses && self.addresses[`btc_address`];
      } else if (self.activePayment === 'eth') {
        return self.addresses && self.addresses[`eth_address`];
      }
    },
  }));

import { useContext, createContext } from 'react';
import { types, Instance, onSnapshot } from 'mobx-state-tree';

import { User } from './User';
import { ProductsStore } from './Product';
import { CartStore } from './Cart';
import { CheckoutStore } from './Checkout';

const RootModel = types.model({
  user: User,
  productsStore: ProductsStore,
  cart: CartStore,
  checkout: CheckoutStore,
});

export let Store = RootModel.create({
  user: {
    username: '',
    email: '',
    isLogin: localStorage.access_token ? true : false,
    first_name: '',
    last_name: '',
  },
  productsStore: {},
  cart: {},
  checkout: {
    activePayment: 'card',
    isPaypalShow: false,
    isShowModal: false,
  },
});

const cartData = localStorage.getItem('cart');
const productsData = localStorage.getItem('products');
if (productsData) {
  const cartJson = cartData && JSON.parse(cartData);
  const productsJson = JSON.parse(productsData);

  Store.productsStore.updateProducts(productsJson.products);
  Store.cart.updateCart(cartJson);
}

export const rootStore = Store;

onSnapshot(rootStore, (snapshot) => {
  console.log('Snapshot: ', snapshot);
  localStorage.setItem('products', JSON.stringify(snapshot.productsStore));
  localStorage.setItem('cart', JSON.stringify(snapshot.cart));
});

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;

export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}

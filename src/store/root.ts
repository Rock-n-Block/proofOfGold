import { useContext, createContext } from 'react';
import { types, Instance, onSnapshot } from 'mobx-state-tree';

import { User } from './User';
import { ProductsStore } from './Product';
import { CartStore } from './Cart';

const RootModel = types.model({
  user: User,
  productsStore: ProductsStore,
  cart: CartStore,
});

let initialState = RootModel.create({
  user: {
    name: '',
    email: '',
    token: '',
    isLogin: false,
  },
  productsStore: {},
  cart: {},
});

const cartData = localStorage.getItem('cart');
const productsData = localStorage.getItem('products');
if (productsData) {
  const cartJson = cartData && JSON.parse(cartData);
  const productsJson = JSON.parse(productsData);

  initialState.productsStore.updateProducts(productsJson.products);
  initialState.cart.updateCart(cartJson);
}

export const rootStore = initialState;

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

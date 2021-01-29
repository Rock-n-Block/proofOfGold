import { useContext, createContext } from 'react';
import { types, Instance, onSnapshot } from 'mobx-state-tree';

import { User } from './User';

const RootModel = types.model({
  user: User,
});

let initialState = RootModel.create({
  user: {
    name: '',
    email: '',
    token: '',
    isLogin: false,
  },
});

// const data = localStorage.getItem('rootState');
// if (data) {
//   const json = JSON.parse(data);
//   if (RootModel.is(json)) {
//     initialState = RootModel.create(json);
//   }
// }

export const rootStore = initialState;

onSnapshot(rootStore, (snapshot) => {
  console.log('Snapshot: ', snapshot);
  //   localStorage.setItem('rootState', JSON.stringify(snapshot));
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

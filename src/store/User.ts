import { types, flow } from 'mobx-state-tree';
import { userApi } from '../utils/api';

export const User = types
  .model({
    name: types.string,
    email: types.string,
    token: types.string,
    isLogin: types.boolean,
  })
  .actions((self) => {
    function updateUserData(data: any) {
      debugger;
      localStorage.access_token = data.token;
      self = { ...data };
    }
    const register = flow(function* register(userData) {
      try {
        console.log(userData, 'register');
        const { data } = yield userApi.register(userData);

        debugger;
        updateUserData({
          ...data,
          isLogin: true,
        });
      } catch (err) {
        console.log(err, 'register', userData);
      }
    });
    const login = flow(function* login(userData) {
      try {
        console.log(userData, 'login');
        const data = yield userApi.login(userData);

        updateUserData({
          ...data,
          isLogin: true,
        });
      } catch (err) {
        console.log(err, 'login', userData);
      }
    });
    return { register, login };
  });

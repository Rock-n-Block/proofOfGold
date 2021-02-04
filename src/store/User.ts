import { types, flow } from 'mobx-state-tree';
import { userApi } from '../utils/api';
import user from '../utils/api/user';

export const User = types
  .model({
    username: types.string,
    email: types.string,
    isLogin: types.boolean,
    first_name: types.string,
    last_name: types.string,
  })
  .actions((self) => {
    function updateUserData(data: any) {
      if (data.token) {
        localStorage.access_token = data.token;
      }
      // self = { ...data };
      self.email = data.email ? data.email : '';
      self.username = data.username ? data.username : '';
      self.first_name = data.first_name ? data.first_name : '';
      self.last_name = data.last_name ? data.last_name : '';
      self.isLogin = data.isLogin ? data.isLogin : false;
    }
    const getMe = flow(function* getMe() {
      try {
        const { data } = yield userApi.getMe();

        updateUserData({
          ...data,
          isLogin: true,
        });
      } catch (err) {
        console.log(err, 'get me');
        logout();
        throw new Error(err);
      }
    });
    const register = flow(function* register(userData) {
      try {
        console.log(userData, 'register');
        const { data } = yield userApi.register(userData);

        updateUserData({
          ...data,
          isLogin: true,
        });
        return true;
      } catch (err) {
        console.log(err, 'register', userData);
        throw new Error(err);
      }
    });
    const login = flow(function* login(userData) {
      try {
        const { data } = yield userApi.login(userData);

        updateUserData({
          ...data,
          isLogin: true,
        });
        debugger;
        return true;
      } catch (err) {
        console.log(err, 'login', userData);
        throw new Error(err);
      }
    });
    const logout = () => {
      self.email = '';
      self.username = '';
      self.first_name = '';
      self.last_name = '';
      self.isLogin = false;

      delete localStorage.access_token;
    };
    return { register, login, getMe, logout };
  });

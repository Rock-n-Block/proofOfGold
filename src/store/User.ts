import { types, flow, Instance } from 'mobx-state-tree';
import { userApi } from '../utils/api';
import user from '../utils/api/user';

const Address = types.model({
  first_name: types.string,
  last_name: types.string,
  company_name: types.string,
  country: types.string,
  full_address: types.string,
  town: types.string,
  county: types.string,
  phone: types.string,
  email: types.string,
});

export const User = types
  .model({
    username: types.string,
    email: types.string,
    isLogin: types.boolean,
    first_name: types.string,
    last_name: types.string,
    billing_address: types.maybe(Address),
    shipping_address: types.maybe(Address),
  })
  .actions((self) => {
    function updateUserData(data: any) {
      if (data.token) {
        localStorage.access_token = data.token;
      }
      self.email = data.email ? data.email : '';
      self.username = data.username ? data.username : '';
      self.first_name = data.first_name ? data.first_name : '';
      self.last_name = data.last_name ? data.last_name : '';
      self.isLogin = data.isLogin ? data.isLogin : false;
    }
    function updateBillingAddress(data: Instance<typeof Address>) {
      self.billing_address = data;
    }
    function updateShippingAddress(data: Instance<typeof Address>) {
      self.shipping_address = data;
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
    const getBillingAddress = flow(function* getBillingAddress() {
      try {
        const { data } = yield user.getBilling();

        updateBillingAddress(data);
      } catch (err) {
        console.log(err, 'get billing address');
      }
    });
    const getShippingAddress = flow(function* getShippingAddress() {
      try {
        const { data } = yield user.getShipping();

        updateShippingAddress(data);
      } catch (err) {
        console.log(err, 'get shipping address');
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
        return true;
      } catch (err) {
        if (err.response.data.status) {
          throw new Error(err.response.data.status);
        }
        if (err.response.data.non_field_errors) {
          throw new Error('data');
        }
        throw new Error(err);
      }
    });
    const activate = flow(function* activate(token) {
      try {
        const { data } = yield userApi.activateAccount(token);

        updateUserData({
          ...data,
          isLogin: true,
        });

        return true;
      } catch (err) {
        throw new Error(err.response.data);
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
    return {
      register,
      login,
      getMe,
      logout,
      updateUserData,
      activate,
      updateBillingAddress,
      getBillingAddress,
      updateShippingAddress,
      getShippingAddress,
    };
  });

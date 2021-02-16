import axios from '../../core/axios';

interface IRegister {
  username: string;
  password: string;
  email: string;
}

interface ILogin {
  username: string;
  password: string;
}

interface IChangePassword {
  password: string;
  token: string;
}

interface IAddresses {
  first_name: string;
  last_name: string;
  company_name: string;
  country: string;
  full_address: string;
  town: string;
  county: string;
  phone: string;
  email: string;
}

export default {
  getMe: () => axios.get(`account/${localStorage.access_token}/`),
  register: (data: IRegister) => axios.post('account/register/', data),
  login: (data: ILogin) => axios.post('account/login', data),
  changeDetails: (data: any) =>
    axios.patch(`account/${localStorage.access_token}/`, data),
  activateAccount: (token: string) =>
    axios.get(`account/register/activate/${token}`),
  resetPassword: (userData: any) => axios.post('account/reset', userData),
  checkResetPasswordToken: (token: string) =>
    axios.get(`account/reset/validate_token/${token}/`),
  changePassword: (data: IChangePassword) =>
    axios.post('account/reset/confirm/', data),
  changeBilling: (data: IAddresses) =>
    axios.patch(`account/${localStorage.access_token}/billing/`, data),
  changeShipping: (data: IAddresses) =>
    axios.patch(`account/${localStorage.access_token}/shipping/`, data),
  getBilling: () => axios.get(`account/${localStorage.access_token}/billing/`),
  getShipping: () =>
    axios.get(`account/${localStorage.access_token}/shipping/`),
  checkSecurityCode: (code: string) =>
    axios.post('account/login/check_code', { code }),
};

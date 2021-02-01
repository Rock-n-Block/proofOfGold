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

export default {
  getMe: () => axios.get(`account/${localStorage.access_token}/`),
  register: (data: IRegister) => axios.post('account/register/', data),
  login: (data: ILogin) => axios.post('account/login/', data),
};

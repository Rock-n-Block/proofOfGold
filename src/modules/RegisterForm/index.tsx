import React from 'react';
import { withFormik } from 'formik';

import { RegisterForm } from '../../components';
import { validateForm } from '../../utils/validate';
import { userApi } from '../../utils/api';
import getIpFromStr from '../../utils/getIpFromStr';

interface RegisterFormProps {
  username: string;
  email: string;
  new_password: string;
}

export default ({ history }: any) => {
  const FormWithFormik = withFormik<{}, RegisterFormProps>({
    enableReinitialize: true,
    mapPropsToValues: () => ({
      username: '',
      email: '',
      new_password: '',
    }),
    validate: (values) => {
      let errors = {};

      validateForm({ isAuth: false, values, errors, not_required: [] });

      return errors;
    },

    handleSubmit: (values, { setErrors }) => {
      const postData = {
        username: values.username,
        email: values.email,
        password: values.new_password,
        ip: '',
      };
      userApi.getIp().then(({ data }: any) => {
        const ip = getIpFromStr(data);
        postData.ip = ip;

        userApi
          .register(postData)
          .then((res) => {
            console.log(res, 'register');
            history.push('/verify');
          })
          .catch((err) => {
            if (err.response.data) {
              setErrors({
                ...err.response.data,
              });
            }
          });
      });
    },

    displayName: 'RegisterForm',
  })(RegisterForm);
  return <FormWithFormik />;
};

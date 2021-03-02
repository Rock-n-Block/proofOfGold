import React from 'react';
import { withFormik } from 'formik';

import { LoginForm } from '../../components';
import { validateForm } from '../../utils/validate';
import getIpFromStr from '../../utils/getIpFromStr';
import { useMst } from '../../store/root';
import { userApi } from '../../utils/api';

interface LoginFormProps {
  username: string;
  password: string;
}

export default ({ history }: any) => {
  const { user } = useMst();
  const FormWithFormik = withFormik<any, LoginFormProps>({
    enableReinitialize: true,
    mapPropsToValues: () => ({
      username: '',
      password: '',
    }),
    validate: (values) => {
      let errors = {};

      validateForm({ isAuth: true, values, errors, not_required: [] });

      return errors;
    },

    handleSubmit: (values, { setErrors }) => {
      userApi
        .getIp()
        .then(({ data }: any) => {
          const ip = getIpFromStr(data);
          user
            .login({
              ...values,
              ip,
            })
            .then(() => {
              history.push('/');
            })
            .catch(({ message }) => {
              if (message === 'User is not activated') {
                history.push('/verify');
              }
              if (message === 'data') {
                setErrors({
                  username: 'Incorrect login or password',
                  password: 'Incorrect login or password',
                });
              }
              if (message === 'code') {
                history.push('/security');
              }
            });
        })
        .catch((err) => console.log(err, 'get user ip'));
    },

    displayName: 'LoginForm',
  })(LoginForm);
  return <FormWithFormik />;
};

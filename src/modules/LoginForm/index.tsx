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
  isLoading: boolean;
}

export default ({ history }: any) => {
  const { user } = useMst();
  const FormWithFormik = withFormik<any, LoginFormProps>({
    enableReinitialize: true,
    mapPropsToValues: () => ({
      username: '',
      password: '',
      isLoading: false,
    }),
    validate: (values) => {
      let errors = {};

      validateForm({ isAuth: true, values, errors, not_required: [] });

      return errors;
    },

    handleSubmit: (values, { setErrors, setFieldValue }) => {
      setFieldValue('isLoading', true);
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
              setFieldValue('isLoading', false);
            })
            .catch(({ message }) => {
              setFieldValue('isLoading', false);
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
        .catch((err) => {
          setFieldValue('isLoading', false);
          console.log(err, 'get user ip');
        });
    },

    displayName: 'LoginForm',
  })(LoginForm);
  return <FormWithFormik />;
};

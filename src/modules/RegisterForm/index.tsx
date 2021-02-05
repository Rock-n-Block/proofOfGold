import React from 'react';
import { withFormik } from 'formik';

import { RegisterForm } from '../../components';
import { validateForm } from '../../utils/validate';
import { userApi } from '../../utils/api';

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

    handleSubmit: (values) => {
      const postData = {
        username: values.username,
        email: values.email,
        password: values.new_password,
      };
      userApi
        .register(postData)
        .then((res) => {
          console.log(res, 'register');
          history.push('/verify');
        })
        .catch((err) => console.log(err, 'register'));
    },

    displayName: 'RegisterForm',
  })(RegisterForm);
  return <FormWithFormik />;
};

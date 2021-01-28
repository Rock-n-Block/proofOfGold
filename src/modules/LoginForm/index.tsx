import React from 'react';
import { withFormik } from 'formik';

import { LoginForm } from '../../components';
import { validateForm } from '../../utils/validate';

interface LoginFormProps {
  username: string;
  password: string;
}

export default () => {
  const FormWithFormik = withFormik<{}, LoginFormProps>({
    enableReinitialize: true,
    mapPropsToValues: () => ({
      username: '',
      password: '',
    }),
    validate: (values) => {
      let errors = {};

      validateForm({ isAuth: true, values, errors });

      return errors;
    },

    handleSubmit: (values) => {
      console.log(values);
    },

    displayName: 'LoginForm',
  })(LoginForm);
  return <FormWithFormik />;
};

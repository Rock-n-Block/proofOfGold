import React from 'react';
import { withFormik } from 'formik';

import { RegisterForm } from '../../components';
import { validateForm } from '../../utils/validate';

interface RegisterFormProps {
  username: string;
  email: string;
  password: string;
}

export default () => {
  const FormWithFormik = withFormik<{}, RegisterFormProps>({
    enableReinitialize: true,
    mapPropsToValues: () => ({
      username: '',
      email: '',
      password: '',
    }),
    validate: (values) => {
      let errors = {};

      validateForm({ isAuth: false, values, errors });

      return errors;
    },

    handleSubmit: (values) => {
      console.log(values);
    },

    displayName: 'RegisterForm',
  })(RegisterForm);
  return <FormWithFormik />;
};

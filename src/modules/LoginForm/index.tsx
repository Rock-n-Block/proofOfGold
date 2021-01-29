import React from 'react';
import { withFormik } from 'formik';

import { LoginForm } from '../../components';
import { validateForm } from '../../utils/validate';
import { useMst } from '../../store/root';

interface LoginFormProps {
  username: string;
  password: string;
}

export default () => {
  const { user } = useMst();
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
      user.login(values);
    },

    displayName: 'LoginForm',
  })(LoginForm);
  return <FormWithFormik />;
};

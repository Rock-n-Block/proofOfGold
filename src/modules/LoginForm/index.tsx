import React from 'react';
import { withFormik } from 'formik';

import { LoginForm } from '../../components';
import { validateForm } from '../../utils/validate';
import { useMst } from '../../store/root';

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

      validateForm({ isAuth: true, values, errors });

      return errors;
    },

    handleSubmit: (values) => {
      user.login(values).then(() => history.push('/account'));
    },

    displayName: 'LoginForm',
  })(LoginForm);
  return <FormWithFormik />;
};

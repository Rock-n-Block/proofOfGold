import React from 'react';
import { withFormik } from 'formik';

import { RegisterForm } from '../../components';
import { validateForm } from '../../utils/validate';
import { useMst } from '../../store/root';

interface RegisterFormProps {
  username: string;
  email: string;
  new_password: string;
}

export default ({ history }: any) => {
  const { user } = useMst();
  const FormWithFormik = withFormik<{}, RegisterFormProps>({
    enableReinitialize: true,
    mapPropsToValues: () => ({
      username: '',
      email: '',
      new_password: '',
    }),
    validate: (values) => {
      let errors = {};

      validateForm({ isAuth: false, values, errors });

      return errors;
    },

    handleSubmit: (values) => {
      const postData = {
        username: values.username,
        email: values.email,
        password: values.new_password,
      };
      user.register(postData).then(() => history.push('/account'));
    },

    displayName: 'RegisterForm',
  })(RegisterForm);
  return <FormWithFormik />;
};

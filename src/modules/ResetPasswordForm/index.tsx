import React from 'react';
import { withFormik } from 'formik';

import { ResetPasswordForm } from '../../components';
import { validateForm } from '../../utils/validate';
import { userApi } from '../../utils/api';

interface ResetPasswordFormProps {
  usernameOrEmail: string;
}

export default ({ history }: any) => {
  const FormWithFormik = withFormik<{}, ResetPasswordFormProps>({
    enableReinitialize: true,
    mapPropsToValues: () => ({
      usernameOrEmail: '',
    }),
    validate: (values) => {
      let errors = {};

      validateForm({ isAuth: false, values, errors, not_required: [] });

      return errors;
    },

    handleSubmit: (values) => {
      userApi
        .resetPassword({
          email: values.usernameOrEmail,
        })
        .then(() => {
          history.push('/lost/check');
        })
        .catch((err) => {
          console.log(err, 'reset password');
        });
    },

    displayName: 'ResetPasswordForm',
  })(ResetPasswordForm);
  return <FormWithFormik />;
};

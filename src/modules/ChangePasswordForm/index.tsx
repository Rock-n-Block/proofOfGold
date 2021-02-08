import React from 'react';
import { withFormik } from 'formik';

import { ChangePasswordForm } from '../../components';
import { validateForm } from '../../utils/validate';
import { userApi } from '../../utils/api';

interface ChangePasswordFormProps {
  new_password: string;
  confirm_new_password: string;
}

export default ({ history, token }: any) => {
  const FormWithFormik = withFormik<{}, ChangePasswordFormProps>({
    enableReinitialize: true,
    mapPropsToValues: () => ({
      new_password: '',
      confirm_new_password: '',
    }),
    validate: (values) => {
      let errors = {};

      validateForm({ isAuth: false, values, errors, not_required: [] });

      return errors;
    },

    handleSubmit: (values) => {
      // userApi
      //   .resetPassword({
      //     email: values.usernameOrEmail,
      //   })
      //   .then(() => {
      //     history.push('/reset/check');
      //   })
      //   .catch((err) => {
      //     console.log(err, 'reset password');
      //   });
      userApi
        .changePassword({
          password: values.new_password,
          token: token,
        })
        .then(() => history.push('/lost/ok'))
        .catch((err) => console.log(err, 'change password'));
    },

    displayName: 'ChangePasswordForm',
  })(ChangePasswordForm);
  return <FormWithFormik />;
};

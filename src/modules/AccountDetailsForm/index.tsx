import React from 'react';
import { withFormik } from 'formik';

import { AccountDetailsForm } from '../../components';
import { validateForm } from '../../utils/validate';

interface AccountDetailsFormProps {
  firstname: string;
  lastname: string;
  usermane: string;
  email: string;
  username: string;
  password: string;
  new_password: string;
  confirm_password: string;
}

export default () => {
  const FormWithFormik = withFormik<{}, AccountDetailsFormProps>({
    enableReinitialize: true,
    mapPropsToValues: () => ({
      firstname: '',
      lastname: '',
      usermane: '',
      email: '',
      username: '',
      password: '',
      new_password: '',
      confirm_password: '',
    }),
    validate: (values) => {
      let errors = {};

      validateForm({ isAuth: true, values, errors, not_required: [] });

      return errors;
    },

    handleSubmit: (values) => {
      console.log(values);
    },

    displayName: 'AccountDetailsForm',
  })(AccountDetailsForm);
  return <FormWithFormik />;
};

import React from 'react';
import { withFormik } from 'formik';

import { ContactUsForm } from '../../components';
import { validateForm } from '../../utils/validate';

interface ContactUsFormProps {
  username: string;
  email: string;
  message: string;
}

export default () => {
  const FormWithFormik = withFormik<{}, ContactUsFormProps>({
    enableReinitialize: true,
    mapPropsToValues: () => ({
      username: '',
      email: '',
      message: '',
    }),
    validate: (values) => {
      let errors = {};

      validateForm({ isAuth: false, values, errors });

      return errors;
    },

    handleSubmit: (values) => {
      console.log(values);
    },

    displayName: 'ContactUsForm',
  })(ContactUsForm);
  return <FormWithFormik />;
};

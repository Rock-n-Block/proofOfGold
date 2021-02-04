import React from 'react';
import { withFormik } from 'formik';

import { ShippingForm } from '../../components';
import { validateForm } from '../../utils/validate';

interface ShippingFormProps {
  firstname: string;
  lastname: string;
  company: string;
  country: string;
  street: string;
  town: string;
  county: string;
  phome: string;
  email: string;
  username: string;
  password?: string;
  notes: string;
}

export default ({ isLogin, username, email, first_name, last_name }: any) => {
  const FormWithFormik = withFormik<{}, ShippingFormProps>({
    enableReinitialize: true,
    mapPropsToValues: () =>
      isLogin
        ? {
            firstname: first_name,
            lastname: last_name,
            company: '',
            country: '',
            street: '',
            town: '',
            county: '',
            phome: '',
            email: email,
            username: username,
            notes: '',
          }
        : {
            firstname: '',
            lastname: '',
            company: '',
            country: '',
            street: '',
            town: '',
            county: '',
            phome: '',
            email: '',
            username: '',
            password: '',
            notes: '',
          },
    validate: (values) => {
      let errors = {};

      validateForm({
        isAuth: true,
        values,
        errors,
        not_required: ['company', 'phone', 'notes'],
      });

      return errors;
    },

    handleSubmit: (values) => {
      console.log(values);
    },

    displayName: 'ShippingForm',
  })(ShippingForm);
  return <FormWithFormik />;
};

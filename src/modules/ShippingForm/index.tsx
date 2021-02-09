import React from 'react';
import { withFormik } from 'formik';

import { ShippingForm } from '../../components';
import { validateForm } from '../../utils/validate';

interface ShippingFormProps {
  firstname: string;
  lastname: string;
  company: string;
  country: string;
  full_address: string;
  town: string;
  county: string;
  phone: string;
  email: string;
  username: string;
  password?: string;
  notes: string;
}

export default ({ isLogin, username, email, shipping_address }: any) => {
  const FormWithFormik = withFormik<any, ShippingFormProps>({
    enableReinitialize: true,
    mapPropsToValues: () =>
      isLogin
        ? {
            firstname: shipping_address?.first_name,
            lastname: shipping_address?.last_name,
            company: shipping_address?.company_name,
            country: shipping_address?.country,
            full_address: shipping_address?.full_address,
            town: shipping_address?.town,
            county: shipping_address?.county,
            phone: shipping_address?.phone,
            email: email,
            username: username,
            notes: '',
          }
        : {
            firstname: '',
            lastname: '',
            company: '',
            country: '',
            full_address: '',
            town: '',
            county: '',
            phone: '',
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
  return <FormWithFormik isLogin={isLogin} />;
};

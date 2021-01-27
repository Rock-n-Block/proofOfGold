import React from 'react';
import { withFormik } from 'formik';

import { ProductReviewForm } from '../../components';
import { validateForm } from '../../utils/validate';

interface ProductReviewFormProps {
  username: string;
  email: string;
  review: string;
  rate: number;
}

export default () => {
  const FormWithFormik = withFormik<{}, ProductReviewFormProps>({
    enableReinitialize: true,
    mapPropsToValues: () => ({
      username: '',
      email: '',
      review: '',
      rate: 0,
    }),
    validate: (values) => {
      let errors = {};

      validateForm({ isAuth: false, values, errors });

      return errors;
    },

    handleSubmit: (values) => {
      console.log(values);
    },

    displayName: 'ProductReviewForm',
  })(ProductReviewForm);
  return <FormWithFormik />;
};

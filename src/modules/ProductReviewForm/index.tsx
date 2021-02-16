import React from 'react';
import { withFormik } from 'formik';

import { ProductReviewForm } from '../../components';
import { validateForm } from '../../utils/validate';
import { storeApi } from '../../utils/api';
import { useMst } from '../../store/root';

interface ProductReviewFormProps {
  username: string;
  email: string;
  review: string;
  rate: number;
}

export default ({ productId, isLogin, username, email }: any) => {
  const { productsStore } = useMst();
  const FormWithFormik = withFormik<{}, ProductReviewFormProps>({
    enableReinitialize: true,
    mapPropsToValues: () =>
      !isLogin
        ? {
            username: '',
            email: '',
            review: '',
            rate: 0,
          }
        : {
            username: username,
            email: email,
            review: '',
            rate: 0,
          },
    validate: (values) => {
      let errors = {};

      validateForm({ isAuth: false, values, errors, not_required: [] });

      return errors;
    },

    handleSubmit: (values) => {
      storeApi
        .sendReview({
          item_id: productId,
          rate: values.rate,
          body: values.review,
          name: values.username,
          email: values.email,
        })
        .catch((err) => console.log(err, 'review'));
    },

    displayName: 'ProductReviewForm',
  })(ProductReviewForm);
  return <FormWithFormik />;
};

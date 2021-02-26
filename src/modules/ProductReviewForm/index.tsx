import React from 'react';
import { withFormik } from 'formik';
import { observer } from 'mobx-react-lite';

import { ProductReviewForm } from '../../components';
import { validateForm } from '../../utils/validate';
import { storeApi } from '../../utils/api';

interface ProductReviewFormProps {
  username: string;
  email: string;
  review: string;
  rate: number;
}

export default observer(({ productId, isLogin, username, email }: any) => {
  const [isSubmitted, setSubmitted] = React.useState(false);
  const FormWithFormik = withFormik<any, ProductReviewFormProps>({
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
        .then(() => {
          setSubmitted(true);
          const timeout = setTimeout(() => {
            setSubmitted(false);
            clearTimeout(timeout);
          }, 3000);
        })
        .catch((err) => {
          setSubmitted(false);
          console.log(err, 'send review');
        });
    },

    displayName: 'ProductReviewForm',
  })(ProductReviewForm);
  return <FormWithFormik isSubmitted={isSubmitted} />;
});

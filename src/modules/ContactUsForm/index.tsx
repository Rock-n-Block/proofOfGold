import React from 'react';
import { withFormik } from 'formik';
import { observer } from 'mobx-react-lite';

import { ContactUsForm } from '../../components';
import { validateForm } from '../../utils/validate';
import { storeApi } from '../../utils/api';

interface ContactUsFormProps {
  username: string;
  email: string;
  message: string;
}

export default observer(({ username, email }: any) => {
  const [isSubmitted, setSubmitted] = React.useState(false);
  const FormWithFormik = withFormik<any, ContactUsFormProps>({
    enableReinitialize: true,
    mapPropsToValues: () => ({
      username,
      email,
      message: '',
    }),
    validate: (values) => {
      let errors = {};

      validateForm({ isAuth: false, values, errors, not_required: [] });

      return errors;
    },

    handleSubmit: (values) => {
      storeApi
        .contactUs(values)
        .then(() => {
          setSubmitted(true);
          const timeout = setTimeout(() => {
            setSubmitted(false);
            clearTimeout(timeout);
          }, 3000);
        })
        .catch((err) => {
          setSubmitted(false);
        });
    },

    displayName: 'ContactUsForm',
  })(ContactUsForm);
  return <FormWithFormik isSubmitted={isSubmitted} />;
});

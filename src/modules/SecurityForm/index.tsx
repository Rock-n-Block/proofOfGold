import React from 'react';
import { withFormik } from 'formik';

import { SecurityForm } from '../../components';
import { validateForm } from '../../utils/validate';
import { userApi } from '../../utils/api';

interface SecurityFormProps {
  code: string;
}

export default ({ history }: any) => {
  const FormWithFormik = withFormik<any, SecurityFormProps>({
    enableReinitialize: true,
    mapPropsToValues: () => ({
      code: '',
    }),
    validate: (values) => {
      let errors = {};

      validateForm({ isAuth: false, values, errors, not_required: [] });

      return errors;
    },

    handleSubmit: (values, { setErrors }) => {
      userApi
        .checkSecurityCode(values.code)
        .then(() => {
          history.push('/login');
        })
        .catch(() => {
          setErrors({
            code: 'invalid code',
          });
        });
    },

    displayName: 'SecurityForm',
  })(SecurityForm);
  return <FormWithFormik />;
};

import React from 'react';
import { withFormik } from 'formik';
import { observer } from 'mobx-react-lite';

import { AccountDetailsForm } from '../../components';
import { validateForm } from '../../utils/validate';
import { userApi } from '../../utils/api';
import { useMst } from '../../store/root';

interface AccountDetailsFormProps {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  current_password: string;
  change_password: string;
  confirm_password: string;
}

export default () => {
  const { user } = useMst();
  const [isSubmitted, setSubmitted] = React.useState(false);
  const FormWithFormik = withFormik<any, AccountDetailsFormProps>({
    enableReinitialize: true,
    mapPropsToValues: () => ({
      firstname: user.first_name,
      lastname: user.last_name,
      email: user.email,
      username: user.username,
      current_password: '',
      change_password: '',
      confirm_password: '',
    }),
    validate: (values) => {
      let errors = {};

      validateForm({ isAuth: true, values, errors, not_required: [] });

      return errors;
    },

    handleSubmit: (values, { setErrors }) => {
      const usrObj: any = {
        first_name: values.firstname,
        last_name: values.lastname,
        email: values.email,
        username: values.username,
        password: values.current_password,
      };
      if (values.change_password) {
        usrObj.new_password = values.change_password;
      }
      userApi
        .changeDetails(usrObj)
        .then(({ data }) => {
          console.log(data, 'change');
          user.updateUserData({
            ...data,
            isLogin: true,
          });

          setSubmitted(true);
          const timeout = setTimeout(() => {
            setSubmitted(false);
            clearTimeout(timeout);
          }, 3000);
        })
        .catch((err) => {
          setErrors({
            ...err.response.data,
            [err.response.data.first_name ? 'firstname' : '']: err.response.data
              .first_name,
            [err.response.data.last_name ? 'firstname' : '']: err.response.data
              .last_name,
          });
        });
    },

    displayName: 'AccountDetailsForm',
  })(AccountDetailsForm);
  return <FormWithFormik isSubmitted={isSubmitted} />;
};

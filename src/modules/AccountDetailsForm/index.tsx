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

export default ({ username, email, first_name, last_name }: any) => {
  const { user } = useMst();
  let isSubmitted = false;
  const FormWithFormik = withFormik<any, AccountDetailsFormProps>({
    enableReinitialize: true,
    mapPropsToValues: () => ({
      firstname: first_name,
      lastname: last_name,
      email,
      username,
      current_password: '',
      change_password: '',
      confirm_password: '',
    }),
    validate: (values) => {
      let errors = {};

      validateForm({ isAuth: true, values, errors, not_required: [] });

      return errors;
    },

    handleSubmit: (values) => {
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

          isSubmitted = true;
          const timeout = setTimeout(() => {
            isSubmitted = false;
            clearTimeout(timeout);
          }, 3000);
        })
        .catch((err) => console.log(err));
    },

    displayName: 'AccountDetailsForm',
  })(AccountDetailsForm);
  return <FormWithFormik isSubmitted={isSubmitted} />;
};

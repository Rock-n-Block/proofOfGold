import React from 'react';
import { withFormik } from 'formik';
import { observer } from 'mobx-react-lite';

import { SecurityForm } from '../../components';
import { validateForm } from '../../utils/validate';
import { userApi } from '../../utils/api';
import getIpFromStr from '../../utils/getIpFromStr';
import { useMst } from '../../store/root';

interface SecurityFormProps {
  code: string;
}

export default observer(({ history }: any) => {
  const { user } = useMst();
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
      userApi.getIp().then(({ data }) => {
        const ip = getIpFromStr(data);
        userApi
          .checkSecurityCode({
            code: values.code,
            ip,
          })
          .then(({ data }) => {
            user.updateUserData({
              ...data,
              isLogin: true,
            });
            history.push('/');
          })
          .catch(() => {
            setErrors({
              code: 'invalid code',
            });
          });
      });
    },

    displayName: 'SecurityForm',
  })(SecurityForm);
  return <FormWithFormik />;
});

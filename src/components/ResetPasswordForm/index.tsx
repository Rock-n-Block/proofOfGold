import React from 'react';
import { Form, Input } from 'antd';
import { FormikProps } from 'formik';

import { validateField } from '../../utils/validate';
import { Button } from '../../components';

interface ResetPasswordFormProps {
  usernameOrEmail: string;
}

const ResetPasswordForm: React.FC<FormikProps<ResetPasswordFormProps>> = ({
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  return (
    <Form name="c-form" className="c-form" layout="vertical">
      <Form.Item
        name="usernameOrEmail"
        className="c-form__item input__field"
        validateStatus={validateField('usernameOrEmail', touched, errors)}
        help={!touched.usernameOrEmail ? false : errors.usernameOrEmail}
        label={
          <span className="text-gradient input__label">Username or email</span>
        }>
        <div className="input__star">
          <Input
            id="usernameOrEmail"
            className="c-form__input input"
            size="large"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </Form.Item>
      <Button centered={true} onClick={handleSubmit}>
        RESET PASSWORD
      </Button>
    </Form>
  );
};

export default ResetPasswordForm;

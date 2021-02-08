import React from 'react';
import { Form, Input } from 'antd';
import { FormikProps } from 'formik';

import { validateField } from '../../utils/validate';
import { Button } from '../../components';

interface ChangePasswordFormProps {
  new_password: string;
  confirm_new_password: string;
}

const ChangePasswordForm: React.FC<FormikProps<ChangePasswordFormProps>> = ({
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  return (
    <Form name="c-form" className="c-form" layout="vertical">
      <Form.Item
        name="new_password"
        className="c-form__item input__field"
        validateStatus={validateField('new_password', touched, errors)}
        help={!touched.new_password ? false : errors.new_password}
        label={
          <span className="text-gradient input__label">New password</span>
        }>
        <div className="input__star">
          <Input
            id="new_password"
            className="c-form__input input"
            size="large"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </Form.Item>
      <Form.Item
        name="confirm_new_password"
        className="c-form__item input__field"
        validateStatus={validateField('confirm_new_password', touched, errors)}
        help={
          !touched.confirm_new_password ? false : errors.confirm_new_password
        }
        label={
          <span className="text-gradient input__label">
            Confirm new password
          </span>
        }>
        <div className="input__star">
          <Input
            id="confirm_new_password"
            className="c-form__input input"
            size="large"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </Form.Item>
      <Button onClick={handleSubmit}>save PASSWORD</Button>
    </Form>
  );
};

export default ChangePasswordForm;

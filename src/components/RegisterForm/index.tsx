import React from 'react';
import { Form, Input } from 'antd';
import { FormikProps } from 'formik';

import { validateField } from '../../utils/validate';
import { Button } from '../../components';

interface RegisterFormProps {
  username: string;
  new_password: string;
  email: string;
}

const RegisterForm: React.FC<FormikProps<RegisterFormProps>> = ({
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  return (
    <Form name="l-form" className="l-form" layout="vertical">
      <h3 className="l-form__title h3">Register</h3>
      <Form.Item
        name="username"
        className="l-form__item input__field"
        validateStatus={validateField('username', touched, errors)}
        help={!touched.username ? false : errors.username}
        label={<span className="text-gradient input__label">Username</span>}>
        <div className="input__star">
          <Input
            id="username"
            className="l-form__input input"
            size="large"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </Form.Item>
      <Form.Item
        name="email"
        className="l-form__item input__field"
        validateStatus={validateField('email', touched, errors)}
        help={!touched.email ? false : errors.email}
        label={
          <span className="text-gradient input__label">Email address</span>
        }>
        <div className="input__star">
          <Input
            id="email"
            className="l-form__input input"
            size="large"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </Form.Item>
      <Form.Item
        name="new_password"
        className="l-form__item input__field"
        validateStatus={validateField('new_password', touched, errors)}
        help={!touched.new_password ? false : errors.new_password}
        label={
          <span className="text-gradient input__label">Create password</span>
        }>
        <div className="input__star">
          <Input
            id="new_password"
            className="l-form__input input"
            size="large"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </Form.Item>
      <Button onClick={handleSubmit}>Register</Button>
    </Form>
  );
};

export default RegisterForm;

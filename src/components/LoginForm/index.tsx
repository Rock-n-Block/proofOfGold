import React from 'react';
import { Form, Input } from 'antd';
import { FormikProps } from 'formik';
import { Link } from 'react-router-dom';

import { validateField } from '../../utils/validate';
import { Button } from '../../components';

interface LoginFormProps {
  username: string;
  password: string;
}

const LoginForm: React.FC<FormikProps<LoginFormProps>> = ({
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  return (
    <Form name="l-form" className="l-form" layout="vertical">
      <h3 className="l-form__title h3">Login</h3>
      <Form.Item
        name="username"
        className="l-form__item input__field"
        validateStatus={validateField('username', touched, errors)}
        help={!touched.username ? false : errors.username}
        label={
          <span className="text-gradient input__label">
            Username or email address
          </span>
        }>
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
        name="password"
        className="l-form__item input__field"
        validateStatus={validateField('password', touched, errors)}
        help={!touched.password ? false : errors.password}
        label={<span className="text-gradient input__label">Password</span>}>
        <div className="input__star">
          <Link to="/lost" className="input__forget text-md">
            Lost your password?
          </Link>
          <Input
            id="password"
            className="l-form__input input"
            size="large"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </Form.Item>
      <Button onClick={handleSubmit}>log in</Button>
    </Form>
  );
};

export default LoginForm;

import React from 'react';
import { Form, Input } from 'antd';
import { FormikProps } from 'formik';

import { validateField } from '../../utils/validate';
import { Button } from '../../components';

import './AccountDetailsForm.scss';

interface AccountDetailsFormProps {
  firstname: string;
  lastname: string;
  usermane: string;
  email: string;
  username: string;
  password: string;
  new_password: string;
  confirm_password: string;
}

const AccountDetailsForm: React.FC<FormikProps<AccountDetailsFormProps>> = ({
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  return (
    <Form name="d-form" className="d-form" layout="vertical">
      <Form.Item
        name="firstname"
        className="d-form__item input__field"
        validateStatus={validateField('firstname', touched, errors)}
        help={!touched.firstname ? false : errors.firstname}
        label={<span className="text-gradient input__label">First name</span>}>
        <div className="input__star">
          <Input
            id="firstname"
            className="d-form__input input"
            size="large"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </Form.Item>
      <Form.Item
        name="lastname"
        className="d-form__item input__field"
        validateStatus={validateField('lastname', touched, errors)}
        help={!touched.lastname ? false : errors.lastname}
        label={<span className="text-gradient input__label">Last name</span>}>
        <div className="input__star">
          <Input
            id="lastname"
            className="d-form__input input"
            size="large"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </Form.Item>
      <Form.Item
        name="username"
        className="d-form__item input__field"
        validateStatus={validateField('username', touched, errors)}
        help={!touched.username ? false : errors.username}
        label={
          <span className="text-gradient input__label">Display name</span>
        }>
        <div className="input__star">
          <Input
            id="username"
            className="d-form__input input"
            size="large"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </Form.Item>
      <div className="d-form__info text-md">
        This will be how your name will be displayed in the account section and
        in reviews
      </div>
      <Form.Item
        name="email"
        className="d-form__item input__field"
        validateStatus={validateField('email', touched, errors)}
        help={!touched.email ? false : errors.email}
        label={
          <span className="text-gradient input__label">Email address</span>
        }>
        <div className="input__star">
          <Input
            id="email"
            className="d-form__input input"
            size="large"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </Form.Item>
      <Form.Item
        name="password"
        className="d-form__item input__field"
        validateStatus="error"
        help={errors.password ? errors.password : false}
        label={
          <span className="text-gradient input__label">
            Current password (leave blank to leave unchanged)
          </span>
        }>
        <Input
          id="password"
          className="d-form__input input"
          size="large"
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>
      <Form.Item
        name="new_password"
        className="d-form__item input__field"
        validateStatus="error"
        help={errors.new_password ? errors.new_password : false}
        label={
          <span className="text-gradient input__label">
            New password (leave blank to leave unchanged)
          </span>
        }>
        <Input
          id="new_password"
          className="d-form__input input"
          size="large"
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>
      <Form.Item
        name="confirm_password"
        className="d-form__item input__field"
        validateStatus="error"
        help={errors.confirm_password ? errors.confirm_password : false}
        label={
          <span className="text-gradient input__label">
            Confirm new password
          </span>
        }>
        <Input
          id="confirm_password"
          className="d-form__input input"
          size="large"
          type="password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>
      <Button className="d-form__btn" onClick={handleSubmit}>
        SAVE CHANGES
      </Button>
    </Form>
  );
};

export default AccountDetailsForm;

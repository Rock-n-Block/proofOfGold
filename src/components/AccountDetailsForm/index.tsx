import React from 'react';
import { Form, Input } from 'antd';
import { FormikProps } from 'formik';

import { validateField } from '../../utils/validate';
import { Button } from '../../components';

import './AccountDetailsForm.scss';

interface AccountDetailsFormProps {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  current_password: string;
  change_password: string;
  confirm_password: string;
}

const AccountDetailsForm: React.FC<FormikProps<AccountDetailsFormProps>> = ({
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  values,
}) => {
  return (
    <Form name="d-form" className="d-form" layout="vertical">
      <Form.Item
        name="firstname"
        className="d-form__item input__field"
        validateStatus={validateField('firstname', touched, errors)}
        help={!touched.firstname ? false : errors.firstname}
        initialValue={values.firstname}
        label={<span className="text-gradient input__label">First name</span>}>
        <div className="input__star">
          <Input
            id="firstname"
            value={values.firstname}
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
        initialValue={values.lastname}
        label={<span className="text-gradient input__label">Last name</span>}>
        <div className="input__star">
          <Input
            id="lastname"
            className="d-form__input input"
            value={values.lastname}
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
        initialValue={values.username}
        label={
          <span className="text-gradient input__label">Display name</span>
        }>
        <div className="input__star">
          <Input
            id="username"
            value={values.username}
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
        initialValue={values.email}
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
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </Form.Item>
      <Form.Item
        name="change_password"
        className="d-form__item input__field"
        validateStatus="error"
        help={errors.change_password ? errors.change_password : false}
        label={
          <span className="text-gradient input__label">
            New password (leave blank to leave unchanged)
          </span>
        }>
        <Input
          id="change_password"
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
      <Form.Item
        name="current_password"
        className="d-form__item input__field"
        validateStatus="error"
        help={errors.current_password ? errors.current_password : false}
        label={
          <span className="text-gradient input__label">
            Current password (leave blank to leave unchanged)
          </span>
        }>
        <div className="input__star">
          <Input
            id="current_password"
            className="d-form__input input"
            size="large"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </Form.Item>
      <Button className="d-form__btn" onClick={handleSubmit}>
        SAVE CHANGES
      </Button>
    </Form>
  );
};

export default AccountDetailsForm;

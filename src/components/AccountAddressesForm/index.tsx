import React from 'react';
import { Form, Input } from 'antd';
import { FormikProps } from 'formik';
import ReactInputMask from 'react-input-mask';

import { validateField } from '../../utils/validate';
import { Button } from '../../components';

interface AccountAddressesProps {
  firstname: string;
  lastname: string;
  company: string;
  country: string;
  full_address: string;
  town: string;
  county: string;
  phone: string;
  email: string;
}

const AccountAddresses: React.FC<FormikProps<AccountAddressesProps>> = ({
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  isBilling,
  values,
}: any) => {
  return (
    <>
      <h1 className="h1-md text-uppercase text-gradient addresses__title-form">
        {isBilling ? 'Billing address' : 'Shipping address'}
      </h1>
      <Form name="a-form" className="a-form" layout="vertical">
        <Form.Item
          name="firstname"
          className="a-form__item input__field"
          initialValue={values.firstname}
          validateStatus={validateField('firstname', touched, errors)}
          help={!touched.firstname ? false : errors.firstname}
          label={
            <span className="text-gradient input__label">First name</span>
          }>
          <div className="input__star">
            <Input
              id="firstname"
              className="a-form__input input"
              value={values.firstname}
              size="large"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </Form.Item>
        <Form.Item
          name="lastname"
          className="a-form__item input__field"
          initialValue={values.lastname}
          validateStatus={validateField('lastname', touched, errors)}
          help={!touched.lastname ? false : errors.lastname}
          label={<span className="text-gradient input__label">Last name</span>}>
          <div className="input__star">
            <Input
              id="lastname"
              className="a-form__input input"
              value={values.lastname}
              size="large"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </Form.Item>
        <Form.Item
          name="company"
          className="a-form__item input__field"
          validateStatus={validateField('company', touched, errors)}
          required={false}
          initialValue={values.company}
          help={!touched.company ? false : errors.company}
          label={
            <span className="text-gradient input__label">
              Company name (optional)
            </span>
          }>
          <Input
            id="company"
            value={values.company}
            className="a-form__input input"
            size="large"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          name="country"
          className="a-form__item input__field"
          validateStatus={validateField('country', touched, errors)}
          initialValue={values.country}
          help={!touched.country ? false : errors.country}
          label={
            <span className="text-gradient input__label">Country / Region</span>
          }>
          <div className="input__star">
            <Input
              id="country"
              value={values.country}
              className="a-form__input input"
              size="large"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </Form.Item>
        <Form.Item
          name="county"
          className="a-form__item input__field"
          validateStatus={validateField('county', touched, errors)}
          required={false}
          initialValue={values.county}
          help={!touched.county ? false : errors.county}
          label={
            <span className="text-gradient input__label">
              State / County (optional)
            </span>
          }>
          <Input
            id="county"
            className="a-form__input input"
            value={values.county}
            size="large"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          name="town"
          className="a-form__item input__field"
          validateStatus={validateField('town', touched, errors)}
          help={!touched.town ? false : errors.town}
          initialValue={values.town}
          label={
            <span className="text-gradient input__label">Town / City</span>
          }>
          <div className="input__star">
            <Input
              id="town"
              className="a-form__input input"
              value={values.town}
              size="large"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </Form.Item>
        <Form.Item
          name="full_address"
          className="a-form__item input__field"
          validateStatus={validateField('full_address', touched, errors)}
          initialValue={values.full_address}
          help={!touched.full_address ? false : errors.full_address}
          label={
            <span className="text-gradient input__label">Street address</span>
          }>
          <div className="input__star">
            <Input
              id="full_address"
              className="a-form__input input"
              value={values.full_address}
              size="large"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </Form.Item>
        <Form.Item
          name="phone"
          className="a-form__item input__field"
          validateStatus={validateField('phone', touched, errors)}
          initialValue={values.phone}
          required={false}
          help={!touched.phone ? false : errors.phone}
          label={
            <span className="text-gradient input__label">Phone (optional)</span>
          }>
          <Input
            id="phone"
            className="a-form__input input"
            size="large"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          name="email"
          className="a-form__item input__field"
          validateStatus={validateField('email', touched, errors)}
          help={!touched.email ? false : errors.email}
          initialValue={values.email}
          label={
            <span className="text-gradient input__label">Email address</span>
          }>
          <div className="input__star">
            <Input
              id="email"
              className="a-form__input input"
              size="large"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
        </Form.Item>
        <Button onClick={handleSubmit}>SAVE CHANGES</Button>
      </Form>
    </>
  );
};

export default AccountAddresses;

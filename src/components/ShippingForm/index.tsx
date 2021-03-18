import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import { FormikProps } from 'formik';
import { observer } from 'mobx-react-lite';

import { validateField } from '../../utils/validate';
import { CheckoutOrders } from '../../components';

import './ShippingForm.scss';

export interface ProductReviewFormProps {
  firstname: string;
  lastname: string;
  company: string;
  country: string;
  full_address: string;
  town: string;
  county: string;
  paypal_id?: string;
  phone: string;
  notes: string;
  currency?: string;
  save_shipping: boolean;
  same_billing: boolean;
}

const { TextArea } = Input;

const ProductReviewForm: React.FC<
  FormikProps<ProductReviewFormProps>
> = observer(
  ({
    touched,
    errors,
    handleChange,
    handleBlur,
    values,
    isBillingValid,
    isShowAddress,
    setShowAddress,
    checkSupplyErrors,
  }: any) => {
    return (
      <div className="checkout__content">
        <Form name="ch-form" className="ch-form" layout="vertical">
          <Form.Item
            name="firstname"
            className="ch-form__item input__field"
            initialValue={values.firstname}
            validateStatus={validateField('firstname', touched, errors)}
            help={!touched.firstname ? false : errors.firstname}
            label={
              <span className="text-gradient input__label">First name</span>
            }>
            <div className="input__star">
              <Input
                id="firstname"
                className="ch-form__input input"
                value={values.firstname}
                size="large"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </Form.Item>
          <Form.Item
            name="lastname"
            className="ch-form__item input__field"
            initialValue={values.lastname}
            validateStatus={validateField('lastname', touched, errors)}
            help={!touched.lastname ? false : errors.lastname}
            label={
              <span className="text-gradient input__label">Last name</span>
            }>
            <div className="input__star">
              <Input
                id="lastname"
                className="ch-form__input input"
                value={values.lastname}
                size="large"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </Form.Item>
          <Form.Item
            name="company"
            className="ch-form__item input__field"
            validateStatus={validateField('company', touched, errors)}
            initialValue={values.company}
            required={false}
            help={!touched.company ? false : errors.company}
            label={
              <span className="text-gradient input__label">
                Company name (optional)
              </span>
            }>
            <Input
              id="company"
              className="ch-form__input input"
              size="large"
              value={values.company}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            name="country"
            className="ch-form__item input__field"
            validateStatus={validateField('country', touched, errors)}
            help={!touched.country ? false : errors.country}
            initialValue={values.country}
            label={
              <span className="text-gradient input__label">
                Country / Region
              </span>
            }>
            <div className="input__star">
              <Input
                id="country"
                className="ch-form__input input"
                value={values.country}
                size="large"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </Form.Item>
          <Form.Item
            name="full_address"
            className="ch-form__item input__field"
            validateStatus={validateField('full_address', touched, errors)}
            help={!touched.full_address ? false : errors.full_address}
            initialValue={values.full_address}
            label={
              <span className="text-gradient input__label">Full address</span>
            }>
            <div className="input__star">
              <Input
                id="full_address"
                value={values.full_address}
                className="ch-form__input input"
                size="large"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </Form.Item>
          <Form.Item
            name="town"
            className="ch-form__item input__field"
            validateStatus={validateField('town', touched, errors)}
            help={!touched.town ? false : errors.town}
            initialValue={values.town}
            label={
              <span className="text-gradient input__label">Town / City</span>
            }>
            <div className="input__star">
              <Input
                id="town"
                className="ch-form__input input"
                value={values.town}
                size="large"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </Form.Item>
          <Form.Item
            name="county"
            className="ch-form__item input__field"
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
              className="ch-form__input input"
              value={values.county}
              size="large"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            name="phone"
            className="ch-form__item input__field"
            validateStatus={validateField('phone', touched, errors)}
            required={false}
            initialValue={values.phone}
            help={!touched.phone ? false : errors.phone}
            label={
              <span className="text-gradient input__label">
                Phone (optional)
              </span>
            }>
            <Input
              id="phone"
              className="ch-form__input input"
              value={values.phone}
              size="large"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            name="notes"
            className="ch-form__item input__field"
            validateStatus={validateField('notes', touched, errors)}
            help={!touched.notes ? false : errors.notes}
            label={
              <span className="text-gradient input__label">
                Order notes (optional)
              </span>
            }>
            <TextArea
              rows={6}
              maxLength={500}
              showCount={true}
              size="large"
              id="notes"
              className="ch-form__input input"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            name="save_shipping"
            className="ch-form__item input__field"
            validateStatus={validateField('save_shipping', touched, errors)}
            help={!touched.save_shipping ? false : errors.save_shipping}
            valuePropName="checked"
            initialValue={values.save_shipping}>
            <Checkbox
              id="save_shipping"
              className="ch-form__input input"
              defaultChecked={values.save_shipping}
              onChange={handleChange}>
              Want to update your shipping address?
            </Checkbox>
          </Form.Item>
          {!isBillingValid && (
            <Form.Item
              name="same_billing"
              className="ch-form__item input__field"
              validateStatus={validateField('same_billing', touched, errors)}
              help={!touched.same_billing ? false : errors.same_billing}
              valuePropName="checked"
              initialValue={values.same_billing}>
              <Checkbox
                id="same_billing"
                className="ch-form__input input"
                defaultChecked={values.same_billing}
                onChange={handleChange}>
                Does your billing address match your shipping address?
              </Checkbox>
            </Form.Item>
          )}
        </Form>
        <CheckoutOrders
          setShowAddress={setShowAddress}
          isShowAddress={isShowAddress}
          checkSupplyErrors={checkSupplyErrors}
          isLoading={values.isLoading}
        />
      </div>
    );
  },
);

export default ProductReviewForm;

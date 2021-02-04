import React from 'react';
import { Form, Input, InputNumber } from 'antd';
import { FormikProps } from 'formik';
import { observer } from 'mobx-react-lite';
import ReactInputMask from 'react-input-mask';

import { validateField } from '../../utils/validate';
import { CheckoutOrders } from '../../components';
import { useMst } from '../../store/root';

interface ProductReviewFormProps {
  firstname: string;
  lastname: string;
  company: string;
  country: string;
  street: string;
  town: string;
  county: string;
  phome: string;
  email: string;
  username: string;
  password?: string;
  notes: string;
}

const ProductReviewForm: React.FC<
  FormikProps<ProductReviewFormProps>
> = observer(
  ({
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    username,
  }: any) => {
    const { user } = useMst();
    return (
      <div className="checkout__content">
        <Form name="p-form" className="p-form" layout="vertical">
          <Form.Item
            name="firstname"
            className="p-form__item input__field"
            initialValue={user.first_name}
            validateStatus={validateField('firstname', touched, errors)}
            help={!touched.firstname ? false : errors.firstname}
            label={
              <span className="text-gradient input__label">First name</span>
            }>
            <div className="input__star">
              <Input
                id="firstname"
                className="p-form__input input"
                value={user.first_name}
                size="large"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </Form.Item>
          <Form.Item
            name="lastname"
            className="p-form__item input__field"
            initialValue={user.last_name}
            validateStatus={validateField('lastname', touched, errors)}
            help={!touched.lastname ? false : errors.lastname}
            label={
              <span className="text-gradient input__label">Last name</span>
            }>
            <div className="input__star">
              <Input
                id="lastname"
                className="p-form__input input"
                value={user.last_name}
                size="large"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </Form.Item>
          <Form.Item
            name="company"
            className="p-form__item input__field"
            validateStatus={validateField('company', touched, errors)}
            required={false}
            help={!touched.company ? false : errors.company}
            label={
              <span className="text-gradient input__label">
                Company name (optional)
              </span>
            }>
            <Input
              id="company"
              className="p-form__input input"
              size="large"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            name="country"
            className="p-form__item input__field"
            validateStatus={validateField('country', touched, errors)}
            help={!touched.country ? false : errors.country}
            label={
              <span className="text-gradient input__label">
                Country / Region
              </span>
            }>
            <div className="input__star">
              <Input
                id="country"
                className="p-form__input input"
                size="large"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </Form.Item>
          <Form.Item
            name="street"
            className="p-form__item input__field"
            validateStatus={validateField('street', touched, errors)}
            help={!touched.street ? false : errors.street}
            label={
              <span className="text-gradient input__label">Street address</span>
            }>
            <div className="input__star">
              <Input
                id="street"
                className="p-form__input input"
                size="large"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </Form.Item>
          <Form.Item
            name="town"
            className="p-form__item input__field"
            validateStatus={validateField('town', touched, errors)}
            help={!touched.town ? false : errors.town}
            label={
              <span className="text-gradient input__label">Town / City</span>
            }>
            <div className="input__star">
              <Input
                id="town"
                className="p-form__input input"
                size="large"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </Form.Item>
          <Form.Item
            name="county"
            className="p-form__item input__field"
            validateStatus={validateField('county', touched, errors)}
            required={false}
            help={!touched.county ? false : errors.county}
            label={
              <span className="text-gradient input__label">
                Stage / County (optional)
              </span>
            }>
            <Input
              id="county"
              className="p-form__input input"
              size="large"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item
            name="phone"
            className="p-form__item input__field"
            validateStatus={validateField('phone', touched, errors)}
            required={false}
            help={!touched.phone ? false : errors.phone}
            label={
              <span className="text-gradient input__label">
                Phone (optional)
              </span>
            }>
            <Input
              id="phone"
              className="p-form__input input"
              size="large"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          {!user.isLogin && (
            <>
              <div className="checkout__register">
                <Form.Item
                  name="email"
                  className="p-form__item input__field"
                  validateStatus={validateField('email', touched, errors)}
                  help={!touched.email ? false : errors.email}
                  label={
                    <span className="text-gradient input__label">
                      Email address
                    </span>
                  }>
                  <div className="input__star">
                    <Input
                      id="email"
                      className="p-form__input input"
                      size="large"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </Form.Item>
                <Form.Item
                  name="username"
                  className="p-form__item input__field"
                  validateStatus={validateField('username', touched, errors)}
                  required={false}
                  help={!touched.username ? false : errors.username}
                  initialValue={user.username}
                  label={
                    <span className="text-gradient input__label">
                      Account username
                    </span>
                  }>
                  <div className="input__star">
                    <Input
                      id="username"
                      className="p-form__input input"
                      size="large"
                      value={user.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </Form.Item>
                <Form.Item
                  name="password"
                  className="p-form__item input__field"
                  validateStatus={validateField('password', touched, errors)}
                  help={!touched.password ? false : errors.password}
                  label={
                    <span className="text-gradient input__label">
                      Create account passwrod
                    </span>
                  }>
                  <div className="input__star">
                    <Input
                      id="password"
                      className="p-form__input input"
                      size="large"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </Form.Item>
              </div>
              <Form.Item
                name="notes"
                className="p-form__item input__field"
                validateStatus={validateField('notes', touched, errors)}
                help={!touched.notes ? false : errors.notes}
                label={
                  <span className="text-gradient input__label">
                    Order notes (optional)
                  </span>
                }>
                <Input
                  id="notes"
                  className="p-form__input input"
                  size="large"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Item>
            </>
          )}
        </Form>
        <CheckoutOrders />
      </div>
    );
  },
);

export default ProductReviewForm;

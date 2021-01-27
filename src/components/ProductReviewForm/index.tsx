import React from 'react';
import { Form, Input, Rate } from 'antd';
import { FormikProps } from 'formik';

import { validateField } from '../../utils/validate';
import { Button } from '../../components';

import './ProductReviewForm.scss';

const { TextArea } = Input;

interface ProductReviewFormProps {
  username: string;
  email: string;
  review: string;
  rate: number;
}

const ProductReviewForm: React.FC<FormikProps<ProductReviewFormProps>> = ({
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  setFieldValue,
}) => {
  const handleRateChange = (value: number) => {
    setFieldValue('rate', value);
  };
  return (
    <Form name="p-form" className="p-form" layout="vertical">
      <Form.Item
        name="rate"
        className="p-form__item input__field"
        validateStatus={validateField('rate', touched, errors)}
        help={!touched.rate ? false : errors.rate}>
        <div className="p-form__rate">
          <div className="p-form__rate-text">Your rating</div>
          <Rate onChange={handleRateChange} />
        </div>
      </Form.Item>

      <Form.Item
        name="review"
        className="p-form__item input__field"
        validateStatus={validateField('review', touched, errors)}
        help={!touched.review ? false : errors.review}>
        <TextArea
          id="review"
          rows={6}
          className="p-form__input input"
          placeholder="Your review"
          size="large"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>
      <Form.Item
        name="username"
        className="p-form__item input__field"
        validateStatus={validateField('username', touched, errors)}
        help={!touched.username ? false : errors.username}>
        <Input
          id="username"
          className="p-form__input input"
          placeholder="Name"
          size="large"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>
      <Form.Item
        name="email"
        className="p-form__item input__field"
        validateStatus={validateField('email', touched, errors)}
        help={!touched.email ? false : errors.email}>
        <Input
          id="email"
          className="p-form__input input"
          placeholder="Email"
          size="large"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>
      <Button size="lg" onClick={handleSubmit}>
        submit
      </Button>
    </Form>
  );
};

export default ProductReviewForm;

import React from 'react';
import { Form, Input } from 'antd';
import { FormikProps } from 'formik';

import { validateField } from '../../utils/validate';
import { Button } from '../../components';

import './ContactUsForm.scss';

const { TextArea } = Input;

interface ContactUsFormProps {
  username: string;
  email: string;
  message: string;
}

const ContactUsForm: React.FC<FormikProps<ContactUsFormProps>> = ({
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  return (
    <Form name="c-form" className="c-form" layout="vertical">
      <Form.Item
        name="username"
        className="c-form__item input__field"
        validateStatus={validateField('username', touched, errors)}
        help={!touched.username ? false : errors.username}>
        <Input
          id="username"
          className="c-form__input input"
          placeholder="Name"
          size="large"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>
      <Form.Item
        name="email"
        className="c-form__item input__field"
        validateStatus={validateField('email', touched, errors)}
        help={!touched.email ? false : errors.email}>
        <Input
          id="email"
          className="c-form__input input"
          placeholder="Eamil"
          size="large"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>
      <Form.Item
        name="message"
        className="c-form__item input__field"
        validateStatus={validateField('message', touched, errors)}
        help={!touched.message ? false : errors.message}>
        <TextArea
          id="message"
          rows={6}
          className="c-form__input input"
          placeholder="Message"
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

export default ContactUsForm;

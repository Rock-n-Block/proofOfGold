import React from 'react';
import { Form, Input } from 'antd';
import { FormikProps } from 'formik';
import { observer } from 'mobx-react-lite';

import { validateField } from '../../utils/validate';
import { Button } from '../../components';

import './ContactUsForm.scss';

const { TextArea } = Input;

interface ContactUsFormProps {
  username: string;
  email: string;
  message: string;
}

const ContactUsForm: React.FC<FormikProps<ContactUsFormProps>> = observer(
  ({
    touched,
    errors,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitted,
  }: any) => {
    return (
      <Form name="c-form" className="c-form" layout="vertical">
        <Form.Item
          name="username"
          className="c-form__item input__field"
          validateStatus={validateField('username', touched, errors)}
          initialValue={values.username}
          help={!touched.username ? false : errors.username}>
          <Input
            id="username"
            value={values.username}
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
          initialValue={values.email}
          help={!touched.email ? false : errors.email}>
          <Input
            id="email"
            value={values.email}
            className="c-form__input input"
            placeholder="Email"
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
            maxLength={5000}
            id="message"
            showCount={true}
            rows={6}
            className="c-form__input input"
            placeholder="Message"
            size="large"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <div className="box-flex-row">
          <Button size="lg" onClick={handleSubmit}>
            submit
          </Button>
          {isSubmitted && (
            <div className="text-gradient c-form__saved text-md">
              Thanks for your message
            </div>
          )}
        </div>
      </Form>
    );
  },
);

export default ContactUsForm;

import React from 'react';
import { Form, Input } from 'antd';
import { FormikProps } from 'formik';

import { validateField } from '../../utils/validate';
import { Button } from '../../components';

interface SecurityFormProps {
  code: string;
}

const SecurityForm: React.FC<FormikProps<SecurityFormProps>> = ({
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  return (
    <Form name="sec-form" className="sec-form" layout="vertical">
      <Form.Item
        name="code"
        className="sec-form__item input__field"
        validateStatus={validateField('code', touched, errors)}
        help={!touched.code ? false : errors.code}
        label={
          <span className="text-gradient input__label">Security code</span>
        }>
        <div className="input__star">
          <Input
            id="code"
            className="sec-form__input input"
            size="large"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
      </Form.Item>
      <Button centered={true} onClick={handleSubmit}>
        Continue
      </Button>
    </Form>
  );
};

export default SecurityForm;

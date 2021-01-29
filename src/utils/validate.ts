export const validateForm = ({ values, errors }: any) => {
  interface IRules {
    [key: string]: Function;
  }

  const rules: IRules = {
    email: (value: string): void => {
      if (!value) {
        errors.email = 'Enter your email';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = 'Uncorrect address';
      }
    },
    password: (value: string): void => {
      if (!value) {
        errors.password = 'Enter your password';
      }
    },
    new_password: (value: string): void => {
      if (!value) {
        errors.new_password = 'Enter your password';
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
        errors.new_password = 'Your password too light';
      }
    },
    username: (value: string): void => {
      if (!value) {
        errors.username = 'Enter your name';
      }
    },
    message: (value: string): void => {
      if (!value) {
        errors.message = 'Enter your message';
      }
    },
    firstname: (value: string): void => {
      if (!value) {
        errors.firstname = 'Enter your first name';
      }
    },
    lastname: (value: string): void => {
      if (!value) {
        errors.lastname = 'Enter your last name';
      }
    },
    review: (value: string): void => {
      if (!value) {
        errors.review = 'Enter your review';
      }
    },
    rate: (value: number): void => {
      if (!value) {
        errors.rate = 'Enter your rate';
      }
    },
    confirm_password: (value: string): void => {
      if (!values.new_password || !values.confirm_password) {
        errors.confirm_password = 'Повторите пароль';
      } else if (values.new_password !== value) {
        errors.confirm_password = 'Пароли не совпадают';
      }
    },
  };

  Object.keys(values).forEach(
    (key: any) => rules[key] && rules[key](values[key]),
  );
};

export const validateField = (key: any, touched: any, errors: any) => {
  if (touched[key]) {
    if (errors[key]) {
      return 'error';
    } else {
      return 'success';
    }
  } else {
    return '';
  }
};

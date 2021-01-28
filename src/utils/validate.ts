export const validateForm = ({ isAuth, values, errors }: any) => {
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
      } else if (
        !isAuth &&
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)
      ) {
        errors.password = 'Your password too light';
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
      if (!values.password || !values.confirm_password) {
        errors.confirm_password = 'Повторите пароль';
      } else if (values.password !== value) {
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

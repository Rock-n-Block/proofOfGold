export const validateForm = ({ values, errors, not_required }: any) => {
  interface IRules {
    [key: string]: Function;
  }

  const rules: IRules = {
    email: (value: string): void => {
      if (!value) {
        errors.email = 'Enter your email';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = 'Incorrect address';
      }
    },
    password: (value: string): void => {
      if (!value) {
        errors.password = 'Enter your password';
      }
    },
    full_address: (value: string): void => {
      if (!value) {
        errors.full_address = 'Enter your full address';
      }
    },
    new_password: (value: string): void => {
      if (!value) {
        errors.new_password = 'Enter your password';
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
        errors.new_password = 'Your password too light';
      }
    },
    confirm_new_password: (value: string): void => {
      if (values.new_password && !value) {
        errors.confirm_new_password = 'Repeat your password';
      } else if (values.new_password !== value) {
        errors.confirm_new_password = 'Passwords do not match';
      }
    },
    change_password: (value: string): void => {
      if (value && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
        errors.change_password = 'Your password too light';
      }
    },
    username: (value: string): void => {
      if (!value) {
        errors.username = 'Enter your name';
      }
    },
    code: (value: string): void => {
      if (!value) {
        errors.code = 'Enter your code';
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
    street: (value: number): void => {
      if (!value) {
        errors.street = 'Enter your street address';
      }
    },
    town: (value: number): void => {
      if (!value) {
        errors.town = 'Enter your town/city';
      }
    },
    save_shipping: (value: boolean): void => {
      if (!value) {
        errors.save_shipping = 'Your shipping address is not completed';
      }
    },
    same_billing: (value: boolean): void => {
      if (!value) {
        errors.same_billing = 'Your billing address is not completed';
      }
    },
    country: (value: number): void => {
      if (!value) {
        errors.country = 'Enter your contry/region';
      }
    },
    current_password: (value: string): void => {
      if (!value) {
        errors.current_password = 'Enter your password';
      }
    },
    usernameOrEmail: (value: string): void => {
      if (!value) {
        errors.usernameOrEmail = 'Enter your username/email';
      }
    },
    confirm_password: (value: string): void => {
      if (values.change_password && !values.confirm_password) {
        errors.confirm_password = 'Повторите пароль';
      } else if (values.change_password !== value) {
        errors.confirm_password = 'Пароли не совпадают';
      }
    },
  };

  Object.keys(values).forEach(
    (key: any) =>
      rules[key] && !not_required.includes(key) && rules[key](values[key]),
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

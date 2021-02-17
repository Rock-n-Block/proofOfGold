import React from 'react';
import { withFormik } from 'formik';
import { observer } from 'mobx-react-lite';

import { AccountAddressesForm } from '../../components';
import { validateForm } from '../../utils/validate';
import { userApi } from '../../utils/api';
import { useMst } from '../../store/root';

interface AccountAddressesFormProps {
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

export default observer(
  ({
    first_name,
    last_name,
    company_name,
    country,
    full_address,
    town,
    county,
    phone,
    email,
    isBilling,
  }: any) => {
    const { user } = useMst();
    let isSubmitted = false;
    const FormWithFormik = withFormik<any, AccountAddressesFormProps>({
      enableReinitialize: true,
      mapPropsToValues: () => ({
        firstname: first_name,
        lastname: last_name,
        company: company_name,
        country,
        full_address,
        town,
        county,
        phone,
        email,
      }),
      validate: (values) => {
        let errors = {};

        validateForm({
          isAuth: true,
          values,
          errors,
          not_required: ['company', 'phone', 'county'],
        });

        return errors;
      },

      handleSubmit: (values) => {
        const data = {
          first_name: values.firstname,
          last_name: values.lastname,
          company_name: values.company,
          country: values.country,
          full_address: values.full_address,
          town: values.town,
          county: values.county,
          phone: values.phone,
          email: values.email,
        };
        if (isBilling) {
          userApi
            .changeBilling(data)
            .then(() => {
              user.updateBillingAddress(data);

              isSubmitted = true;
              const timeout = setTimeout(() => {
                isSubmitted = false;
                clearTimeout(timeout);
              }, 3000);
            })
            .catch((err) => console.log('change billing address'));
        } else {
          userApi
            .changeShipping(data)
            .then(() => {
              user.updateShippingAddress(data);

              isSubmitted = true;
              const timeout = setTimeout(() => {
                isSubmitted = false;
                clearTimeout(timeout);
              }, 3000);
            })
            .catch((err) => console.log('change shipping address'));
        }
      },

      displayName: 'AccountAddressesForm',
    })(AccountAddressesForm);
    return <FormWithFormik isBilling={isBilling} isSubmitted={isSubmitted} />;
  },
);

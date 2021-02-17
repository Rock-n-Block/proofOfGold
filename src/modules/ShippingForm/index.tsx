import React from 'react';
import { withFormik } from 'formik';
import { observer } from 'mobx-react-lite';

import { ShippingForm } from '../../components';
import { validateForm } from '../../utils/validate';
import { userApi } from '../../utils/api';
import { useMst } from '../../store/root';

interface ShippingFormProps {
  firstname: string;
  lastname: string;
  company: string;
  country: string;
  full_address: string;
  town: string;
  county: string;
  phone: string;
  email: string;
  username: string;
  notes: string;
  currency?: string;
  save_shipping: boolean;
  same_billing: boolean;
}

export default observer(
  ({
    username,
    email,
    shipping_address,
    isBillingValid,
    isShippingValid,
  }: any) => {
    const { user } = useMst();
    const FormWithFormik = withFormik<any, ShippingFormProps>({
      enableReinitialize: true,
      mapPropsToValues: () => ({
        firstname: shipping_address?.first_name,
        lastname: shipping_address?.last_name,
        company: shipping_address?.company_name,
        country: shipping_address?.country,
        full_address: shipping_address?.full_address,
        town: shipping_address?.town,
        county: shipping_address?.county,
        phone: shipping_address?.phone,
        email: email,
        username: username,
        notes: '',
        currency: '',
        save_shipping: !isShippingValid,
        same_billing: !isBillingValid,
      }),
      validate: (values) => {
        let errors = {};
        let not_required = ['company', 'phone', 'notes'];

        if (isShippingValid) {
          not_required.push('save_shipping');
        }

        if (isBillingValid) {
          not_required.push('same_billing');
        }

        validateForm({
          isAuth: true,
          values,
          errors,
          not_required,
        });

        return errors;
      },

      handleSubmit: async (values: any) => {
        const data = {
          first_name: values.firstname,
          last_name: values.lastname,
          company_name: values.company,
          country: values.country,
          full_address: values.full_address,
          town: values.town,
          county: values.county,
          phone: values.phone,
          email: user.email,
        };
        if (values.save_shipping) {
          try {
            await userApi.changeShipping(data);

            user.updateShippingAddress(data);
          } catch (err) {
            console.log(err, 'change shipping address');
          }
        }
        if (values.same_billing) {
          try {
            await userApi.changeBilling(data);
            user.updateBillingAddress(data);
          } catch (error) {
            console.log('change billing address');
          }
        }
      },

      displayName: 'ShippingForm',
    })(ShippingForm);
    return <FormWithFormik isBillingValid={isBillingValid} />;
  },
);

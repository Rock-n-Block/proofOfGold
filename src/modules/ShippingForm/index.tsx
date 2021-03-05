import React from 'react';
import { withFormik } from 'formik';
import { observer } from 'mobx-react-lite';

import { ShippingForm } from '../../components';
import { validateForm } from '../../utils/validate';
import { userApi, payApi, storeApi } from '../../utils/api';
import { useMst } from '../../store/root';
import { ICheckout } from '../../utils/api/pay';

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
    openNotif,
  }: any) => {
    const { user, cart } = useMst();
    const [isShowAddress, setShowAddress] = React.useState(false);
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
        setShowAddress(false);
        const formData = {
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
            await userApi.changeShipping(formData);

            user.updateShippingAddress(formData);
          } catch (err) {
            console.log(err, 'change shipping address');
          }
        }
        if (values.same_billing) {
          try {
            await userApi.changeBilling(formData);
            user.updateBillingAddress(formData);
          } catch (error) {
            console.log('change billing address');
          }
        }

        try {
          let apiData: ICheckout = {
            items: cart.items.map((item) => ({
              item_id: +item.product.id,
              quantity: item.quantity,
            })),
            currency: values.currency,
          };

          if (!values.save_shipping) {
            apiData.shipping_address = formData;
          }

          let supplyErrors = [];

          for (let index = 0; index < cart.items.length; index++) {
            const productId = cart.items[index].product.id;

            const { data: productFromApi } = await storeApi.getProduct(
              productId,
            );

            if (productFromApi.supply <= 0) {
              supplyErrors.push(productFromApi.name);
            }

            console.log(productFromApi, 'product');
          }

          if (!supplyErrors.length) {
            const { data }: any = await payApi.checkout(apiData);
            window.localStorage['order_id'] = data.id;
            setShowAddress(true);
          } else {
            supplyErrors.map((name) => openNotif(name));
          }
        } catch (err) {
          console.log('checkout');
        }
      },

      displayName: 'ShippingForm',
    })(ShippingForm);
    return (
      <FormWithFormik
        isBillingValid={isBillingValid}
        isShowAddress={isShowAddress}
        setShowAddress={setShowAddress}
      />
    );
  },
);

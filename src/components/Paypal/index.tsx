import React from 'react';
import * as ReactDOM from 'react-dom';
import { useFormikContext } from 'formik';
import { observer } from 'mobx-react-lite';

import { useMst } from '../../store/root';

import './Paypal.scss';

declare global {
  interface Window {
    paypal: any;
  }
}

const PayPalButton = window.paypal.Buttons.driver('react', { React, ReactDOM });

const PayPal: React.FC = observer(() => {
  const { cart } = useMst();
  const formik = useFormikContext();
  const createOrder = (data: any, actions: any) => {
    console.log(data, actions, 'createOrder');
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: cart.subTotal + '',
          },
        },
      ],
    });
  };

  const onApprove = (data: any, actions: any) => {
    console.log(data, actions, 'paypal');
    actions.order.get().then((res: any) => console.log(res, 'paypal get'));
    const { orderID } = data;

    const values: any = formik.values;
    formik.setValues({
      ...values,
      currency: 'paypal',
      paypal_id: orderID,
    });
    formik.handleSubmit();
    return actions.order.capture();
  };
  return (
    <div className="paypal text-md">
      <PayPalButton
        createOrder={(data: any, actions: any) => createOrder(data, actions)}
        onApprove={(data: any, actions: any) => onApprove(data, actions)}
      />
    </div>
  );
});

export default PayPal;

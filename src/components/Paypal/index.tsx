import React from 'react';
import * as ReactDOM from 'react-dom';

import './Paypal.scss';

declare global {
  interface Window {
    paypal: any;
  }
}

const PayPalButton = window.paypal.Buttons.driver('react', { React, ReactDOM });

const PayPal: React.FC = () => {
  const createOrder = (data: any, actions: any) => {
    console.log(data, actions, 'createOrder');
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: '0.01',
          },
        },
      ],
    });
  };

  const onApprove = (data: any, actions: any) => {
    console.log(data, actions, 'onApprove');
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
};

export default PayPal;

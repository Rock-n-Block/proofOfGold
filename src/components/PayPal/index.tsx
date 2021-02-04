import React from 'react';
import * as ReactDOM from 'react-dom';

import './PayPal.scss';

declare global {
  interface Window {
    paypal: any;
  }
}

// const PayPalButton = window.paypal.Buttons.driver('react', { React, ReactDOM });

const PayPal: React.FC = () => {
  const createOrder = (data: any, actions: any) => {
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
    return actions.order.capture();
  };
  return (
    <div className="paypal text-md">
      <div className="paypal__text">
        Pay via paypal ,You can pay with your credit card if you don’t have a
        paypal account.
      </div>
      <div className="paypal__text paypal__text-error">
        *If using PayPal or credit card option for payment, a transaction fee of
        3.8% will be added to the final purchase price.
      </div>
      {/* <PayPalButton
        createOrder={(data: any, actions: any) => createOrder(data, actions)}
        onApprove={(data: any, actions: any) => onApprove(data, actions)}
      /> */}
    </div>
  );
};

export default PayPal;

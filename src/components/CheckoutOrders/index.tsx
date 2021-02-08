import React from 'react';
import { observer } from 'mobx-react-lite';
import { useFormikContext } from 'formik';

import numberWithCommas from '../../utils/numberWithCommas';
import { useMst } from '../../store/root';
import { Payments } from '../../components';

const CheckoutOrders = observer(() => {
  const { cart } = useMst();
  const test = useFormikContext();
  React.useEffect(() => {
    console.log(test, 'form');
  }, []);
  return (
    <div className="checkout__wrapper">
      <div className="checkout__order">
        <div className="checkout__order-title text-md text-uppercase text-bold">
          YOUR ORDER
        </div>
        <div className="checkout__order-subtitle text-sm">
          <span>PRODUCT</span>
          <span>SUBTOTAL</span>
        </div>
        {cart.items.length &&
          cart.items.map((cartEntry) => (
            <div
              key={cartEntry.product.id}
              className="checkout__order-product text-uppercase">
              <div className="checkout__order-product-content">
                <div className="checkout__order-product-name text-md">
                  {cartEntry.product.name} × {cartEntry.quantity}
                </div>
                <div className="checkout__order-product-price text-gradient text-lg text-bold">
                  ${numberWithCommas(cartEntry.product.price)}
                </div>
              </div>
              <div className="checkout__order-product-content">
                <div className="text-sm">Subtotal</div>
                <div className="checkout__order-product-total text-gradient text-lg text-bold">
                  ${numberWithCommas(cartEntry.price)}
                </div>
              </div>
            </div>
          ))}
        <div className="checkout__order-total">
          <div className="text-sm">Total</div>
          <div className="checkout__order-product-total text-gradient h1-md text-bold">
            ${numberWithCommas(cart.subTotal)}
          </div>
        </div>
      </div>
      <Payments />
    </div>
  );
});

export default CheckoutOrders;

import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

import { useMst } from '../../store/root';
import { ShippingForm } from '../../modules';

import './Checkout.scss';

const ChackoutPage: React.FC = observer(() => {
  const { user } = useMst();
  return (
    <div className="checkout">
      <div className="row">
        <div className="checkout__title text-gradient h1-md">Checkout</div>
        {!user.isLogin && (
          <div className="checkout__login text-md">
            RETURNING CUSTOMER? CLICK HERE TO{' '}
            <Link className="text-gradient text-bold" to="/login">
              LOGIN
            </Link>
          </div>
        )}
        <ShippingForm {...user} />
      </div>
    </div>
  );
});

export default ChackoutPage;

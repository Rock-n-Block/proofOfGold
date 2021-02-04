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

        {!user.isLogin && (
          <div className="login__info text-md">
            <p>By creating an account:</p>
            <p>
              (a) You consent to Denarius Financial Services AG and its related
              corporations, to collecting, using, disclosing and/or processing
              your personal data, in order to contact you about products and
              services marketed by Denarius Financial Services AG or its other
              business as well as benefits , promotions and rewards, using your
              contact email which Denarius Financial Services AG may have in its
              records from time to time.
            </p>
            <p>
              (b) You confirm and agree that your consent granted here in do not
              supersede or replace any other consents which you may have
              previously provided to Denarius Financial Services AG and its
              related corporations in respect of your personal data, and are
              additional to any rights which to Denarius Financial Services AG
              and its related corporations may have at law to collect, use or
              disclose your personal data.
            </p>
            <p>
              For more information about our Terms and Condition and privacy
              Policy, please see the{' '}
              <Link to="legal" className="text-gradient login__link">
                Legal Page
              </Link>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
});

export default ChackoutPage;

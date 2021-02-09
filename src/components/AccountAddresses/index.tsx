import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Button } from '../../components';
import { AccountAddressesForm } from '../../modules';
import { useMst } from '../../store/root';

import './AccountAddresses.scss';

const AccountAddresses: React.FC = observer(() => {
  const { user } = useMst();
  return (
    <div className="addresses">
      <Switch>
        <Route exact path="/account/addresses">
          <div className="addresses__title text-md">
            The following addresses will be used on the checkout page by
            default.
          </div>
          <div className="addresses__box">
            <div className="addresses__item box-dark">
              <div className="addresses__item-title text-uppercase h3">
                Billing address
              </div>
              <div className="addresses__item-text text-md">
                You have not set up this type of address yet.
              </div>
              <Link to="/account/addresses/billing">
                <Button>add</Button>
              </Link>
            </div>
            <div className="addresses__item box-dark">
              <div className="addresses__item-title text-uppercase h3">
                Shipping address
              </div>
              <div className="addresses__item-text text-md">
                You have not set up this type of address yet.
              </div>
              <Link to="/account/addresses/shipping">
                <Button>add</Button>
              </Link>
            </div>
          </div>
        </Route>
        <Route
          exact
          path="/account/addresses/billing"
          render={() => (
            <AccountAddressesForm isBilling={true} {...user.billing_address} />
          )}
        />
        <Route
          exact
          path="/account/addresses/shipping"
          render={() => <AccountAddressesForm {...user.shipping_address} />}
        />
      </Switch>
    </div>
  );
});

export default AccountAddresses;

import React from 'react';
import { NavLink, Switch, Route, useHistory } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Orders, AccountAddresses } from '../../components';
import { AccountDetailsForm } from '../../modules';
import { useMst } from '../../store/root';

import './Account.scss';

import userImg from '../../assets/img/user.svg';

const AccountPage = observer(() => {
  const history = useHistory();
  const { user } = useMst();
  const onLogout = () => {
    user.logout();
    history.push('/');
  };

  React.useEffect(() => {
    user.getBillingAddress();
    user.getShippingAddress();
  }, []);

  return (
    <div className="account">
      <div className="row account__row">
        <div className="account__wrapper">
          <img src={userImg} alt="" />
          <h3 className="account__name h3">{user.username}</h3>
          <div className="account__nav">
            <NavLink
              className="text-md account__nav-item"
              exact
              to="/account/orders">
              Orders
            </NavLink>
            <NavLink
              className="text-md account__nav-item"
              to="/account/addresses">
              Addresses
            </NavLink>
            <NavLink className="text-md account__nav-item" exact to="/account">
              Account details
            </NavLink>
          </div>
          <div onClick={onLogout} className="text-md account__logout">
            Logout
          </div>
        </div>
        <div className="account__content">
          <Switch>
            <Route exact path="/account/orders" component={Orders} />
            <Route
              exact
              path="/account"
              render={() => <AccountDetailsForm {...user} />}
            />
            <Route
              exact
              path={[
                '/account/addresses',
                '/account/addresses/billing',
                '/account/addresses/shipping',
              ]}
              component={AccountAddresses}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
});

export default AccountPage;

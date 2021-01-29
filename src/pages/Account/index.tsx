import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import { Orders } from '../../components';
import { AccountDetailsForm } from '../../modules';

import './Account.scss';

import userImg from '../../assets/img/user.svg';

const AccountPage = () => {
  return (
    <div className="account">
      <div className="row account__row">
        <div className="account__wrapper">
          <img src={userImg} alt="" />
          <h3 className="account__name h3">John</h3>
          <div className="account__nav">
            <NavLink
              className="text-md account__nav-item"
              exact
              to="/account/orders">
              Orders
            </NavLink>
            <NavLink
              className="text-md account__nav-item"
              exact
              to="/account/addresses">
              Addresses
            </NavLink>
            <NavLink className="text-md account__nav-item" exact to="/account">
              Account details
            </NavLink>
          </div>
          <div className="text-md account__logout">Logout</div>
        </div>
        <div className="account__content">
          <Switch>
            <Route exact path="/account/orders" component={Orders} />
            <Route exact path="/account" component={AccountDetailsForm} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;

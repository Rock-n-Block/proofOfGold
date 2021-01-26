import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { Button } from '../../components';

import './Header.scss';

import LogoImg from '../../assets/img/logo.svg';
import { ReactComponent as Cart } from '../../assets/img/cart.svg';
import { ReactComponent as Search } from '../../assets/img/search.svg';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="row">
        <div className="header__content">
          <NavLink to="/">
            <img src={LogoImg} alt="" />
          </NavLink>
          <div className="">
            <div className="header__box">
              <NavLink exact to="/0" className="header__link">
                Account
              </NavLink>
              <NavLink exact to="/1" className="header__link">
                Shopping Cart
              </NavLink>
            </div>

            <div className="header__box">
              <div className="header__nav">
                <NavLink exact to="/" className="header__nav-item text-md">
                  Home
                </NavLink>
                <NavLink exact to="/coins" className="header__nav-item text-md">
                  Gold coins
                </NavLink>
                <NavLink
                  exact
                  to="/franchise"
                  className="header__nav-item text-md">
                  POG Franchise
                </NavLink>
                <NavLink exact to="/bars" className="header__nav-item text-md">
                  Gold bars
                </NavLink>
              </div>
              <Link to="/shop">
                <Button>Shop NOW</Button>
              </Link>
              <NavLink to="/cart" className="header__icon-link">
                <Cart className="header__icon" />
                <div className="header__icon-counter">4</div>
              </NavLink>
              <Search className="header__icon-search" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

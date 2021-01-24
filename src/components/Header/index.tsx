import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from '../../components';

import './Header.scss';

import LogoImg from '../../assets/img/logo.svg';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="row">
        <div className="header__content">
          <img src={LogoImg} alt="" />
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
                <NavLink exact to="/3" className="header__nav-item text-md">
                  Gold coins
                </NavLink>
                <NavLink exact to="/4" className="header__nav-item text-md">
                  POG Franchise
                </NavLink>
                <NavLink exact to="/5" className="header__nav-item text-md">
                  Gold bars
                </NavLink>
              </div>
              <Button>Shop NOW</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';

import './Footer.scss';

import { NavLink } from 'react-router-dom';

import logoImg from '../../assets/img/logo.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img className="footer__content-logo" src={logoImg} alt="" />

        <div className="footer__content-links">
          <div className="footer__content-links-block">
            <span className="footer__content-links-block-title text-gradient h3">Store</span>
            <NavLink to="/shop" className="footer__content-links-block-link text-md" target="_blank">
              Products
            </NavLink>
            <NavLink to="/product-category/gold_coins" className="footer__content-links-block-link text-md" target="_blank">
              Gold Coins
            </NavLink>
            <NavLink to="/product-category/gold_bars" className="footer__content-links-block-link text-md" target="_blank">
              Gold Bars
            </NavLink>
          </div>

          <div className="footer__content-links-block">
            <span className="footer__content-links-block-title text-gradient h3">Useful Links</span>
            <NavLink to="/my-account" className="footer__content-links-block-link text-md" target="_blank">
              My Account
            </NavLink>
            <NavLink to="/orders" className="footer__content-links-block-link text-md" target="_blank">
              Order History
            </NavLink>
            <NavLink to="/delivery-information" className="footer__content-links-block-link text-md" target="_blank">
              Delivery Information
            </NavLink>
            <NavLink to="/legal" className="footer__content-links-block-link text-md" target="_blank">
              Legal Page
            </NavLink>
          </div>
        </div>

        <div className="footer__content-copyright text-sm">
          &copy;2020 Proof of Gold All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

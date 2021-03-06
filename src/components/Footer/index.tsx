import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

import { useMst } from '../../store/root';

import './Footer.scss';

import logoImg from '../../assets/img/logo.svg';

const Footer: React.FC = observer(() => {
  const { user } = useMst();
  return (
    <footer className="footer">
      <div className="row">
        <div className="footer__content">
          <div className="">
            <Link to="/">
              <img className="footer__content-logo" src={logoImg} alt="" />
            </Link>
          </div>

          <div className="footer__content-links">
            <div className="footer__content-links-block">
              <span className="footer__content-links-block-title text-gradient h3">
                Store
              </span>
              <Link
                to="/shop"
                className="footer__content-links-block-link text-md">
                Products
              </Link>
              <Link
                to="/coins"
                className="footer__content-links-block-link text-md">
                Gold Coins
              </Link>
              <Link
                to="/bars"
                className="footer__content-links-block-link text-md">
                Gold Bars
              </Link>
            </div>

            <div className="footer__content-links-block">
              <span className="footer__content-links-block-title text-gradient h3">
                Useful Links
              </span>
              {user.isLogin ? (
                <Link
                  to="/account"
                  className="footer__content-links-block-link text-md">
                  My Account
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="footer__content-links-block-link text-md">
                  Login
                </Link>
              )}
              {user.isLogin && (
                <Link
                  to="/account/orders"
                  className="footer__content-links-block-link text-md">
                  Order History
                </Link>
              )}
              <Link
                to="/delivery-information"
                className="footer__content-links-block-link text-md">
                Delivery Information
              </Link>
              <Link
                to="/legal"
                className="footer__content-links-block-link text-md">
                Legal Page
              </Link>
            </div>
          </div>
        </div>
        <div className="footer__content-copyright text-sm">
          &copy;2020 Proof of Gold All rights reserved.
        </div>
      </div>
    </footer>
  );
});

export default Footer;

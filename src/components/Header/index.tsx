import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';

import { Button, SearchInput } from '../../components';
import { useMst } from '../../store/root';

import './Header.scss';

import LogoImg from '../../assets/img/logo.svg';
import LogoMImg from '../../assets/img/logo-mobile.svg';
import navOpenImg from '../../assets/img/nav-open.svg';
import navCloseImg from '../../assets/img/nav-close.svg';
import { ReactComponent as Cart } from '../../assets/img/cart.svg';
import { ReactComponent as Search } from '../../assets/img/search.svg';

const Header: React.FC = observer(() => {
  const { user, cart } = useMst();
  const [isPopapOpen, setPopapOpen] = React.useState(false);
  const [isNavMobileOpen, setNavMobileOpen] = React.useState(false);

  const searchPopapRef = React.useRef<any>();
  const searchRef = React.useRef<any>();
  const searchInputRef = React.useRef<any>();

  const outsideClick = (e: any) => {
    const path = e.path || (e.composedPath && e.composedPath());
    if (
      (!path.includes(searchPopapRef.current) &&
        !path.includes(searchRef.current)) ||
      (path.includes(searchRef.current) && isPopapOpen)
    ) {
      setPopapOpen(false);
    }
  };
  React.useEffect(() => {
    document.body.addEventListener('click', outsideClick);
    return () => {
      document.body.removeEventListener('click', outsideClick);
    };
  }, []);

  const onSearchOpen = (e: any): void => {
    e.stopPropagation();
    if (isPopapOpen) {
      setPopapOpen(false);
    } else {
      setPopapOpen(true);
    }
    setTimeout(() => {
      searchInputRef.current.input.focus();
    }, 100);
  };
  return (
    <>
      <header className="header">
        <div className="row header__row">
          <div
            ref={searchPopapRef}
            className={classNames('header__popap', {
              hidden: !isPopapOpen,
            })}>
            <SearchInput
              ref={searchInputRef}
              handleClose={() => {
                setPopapOpen(false);
              }}
            />
          </div>
          <div className="header__content">
            <div
              className="header__nav-open"
              onClick={() => setNavMobileOpen(!isNavMobileOpen)}>
              {isNavMobileOpen ? (
                <img src={navCloseImg} />
              ) : (
                <img src={navOpenImg} />
              )}
            </div>
            <NavLink to="/">
              {window.innerWidth < 776 ? (
                <img src={LogoMImg} alt="" />
              ) : (
                <img src={LogoImg} alt="" />
              )}
            </NavLink>
            <div className="">
              <div className="header__box">
                <NavLink
                  to={user.isLogin ? '/account' : '/login'}
                  className="header__link">
                  Account
                </NavLink>
              </div>

              <div className="header__box header__box-navbar">
                <div className="header__nav">
                  <NavLink exact to="/" className="header__nav-item text-md">
                    Home
                  </NavLink>
                  <NavLink
                    exact
                    to="/coins"
                    className="header__nav-item text-md">
                    Gold coins
                  </NavLink>
                  <NavLink
                    exact
                    to="/bars"
                    className="header__nav-item text-md">
                    Gold bars
                  </NavLink>
                  <NavLink
                    exact
                    to="/franchise"
                    className="header__nav-item text-md">
                    POG Franchise
                  </NavLink>
                </div>
                <div className="header__wrapper">
                  <Link to="/shop" className="mobile-hidden">
                    <Button>Shop NOW</Button>
                  </Link>
                  <NavLink to="/cart" className="header__icon-link">
                    <Cart className="header__icon" />
                    <div className="header__icon-counter">
                      {cart.subQuantity}
                    </div>
                  </NavLink>
                  <Search
                    ref={searchRef}
                    onClick={onSearchOpen}
                    className="header__icon-search mobile-hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={classNames('header__menu', {
          open: isNavMobileOpen,
        })}>
        <div className="header__menu-title h3 text-gradient text-uppercase">
          Store
        </div>
        <div className="header__menu-nav">
          <NavLink
            exact
            to="/shop"
            className="header__menu-nav-item text-md"
            onClick={() => setNavMobileOpen(false)}>
            Products
          </NavLink>
          <NavLink
            exact
            to="/coins"
            className="header__menu-nav-item text-md"
            onClick={() => setNavMobileOpen(false)}>
            Gold Coins
          </NavLink>
          <NavLink
            exact
            to="/bars"
            className="header__menu-nav-item text-md"
            onClick={() => setNavMobileOpen(false)}>
            Gold Bars
          </NavLink>
        </div>
        <div className="header__menu-title h3 text-gradient text-uppercase">
          Useful Links
        </div>
        <div className="header__menu-nav">
          {user.isLogin ? (
            <>
              <NavLink
                exact
                to="/account"
                className="header__menu-nav-item text-md"
                onClick={() => setNavMobileOpen(false)}>
                My Account
              </NavLink>
              <NavLink
                exact
                to="/account/orders"
                className="header__menu-nav-item text-md"
                onClick={() => setNavMobileOpen(false)}>
                Order history
              </NavLink>
            </>
          ) : (
            ''
          )}
          {!user.isLogin ? (
            <NavLink
              exact
              to="/login"
              className="header__menu-nav-item text-md"
              onClick={() => setNavMobileOpen(false)}>
              Login
            </NavLink>
          ) : (
            ''
          )}
          <NavLink
            exact
            to="/delivery-information"
            className="header__menu-nav-item text-md"
            onClick={() => setNavMobileOpen(false)}>
            Delivery Information
          </NavLink>
          <NavLink
            exact
            to="/legal"
            className="header__menu-nav-item text-md"
            onClick={() => setNavMobileOpen(false)}>
            Legal Page
          </NavLink>{' '}
          <NavLink
            exact
            to="/franchise"
            onClick={() => setNavMobileOpen(false)}
            className="header__menu-nav-item text-md">
            POG Franchise
          </NavLink>
        </div>
      </div>
    </>
  );
});

export default Header;

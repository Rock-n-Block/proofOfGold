import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Button, SearchInput } from '../../components';
import { useMst } from '../../store/root';

import './Header.scss';

import LogoImg from '../../assets/img/logo.svg';
import { ReactComponent as Cart } from '../../assets/img/cart.svg';
import { ReactComponent as Search } from '../../assets/img/search.svg';

const Header: React.FC = observer(() => {
  const { user, cart } = useMst();
  const [isPopapOpen, setPopapOpen] = React.useState(false);

  const searchPopapRef = React.useRef<any>();
  const searchRef = React.useRef<any>();

  const outsideClick = (e: any) => {
    const path = e.path || (e.composedPath && e.composedPath());
    if (
      !path.includes(searchPopapRef.current) &&
      !path.includes(searchRef.current)
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
  return (
    <header className="header">
      <div className="row header__row">
        {isPopapOpen && (
          <div ref={searchPopapRef} className="header__popap">
            <SearchInput
              handleClose={() => {
                setPopapOpen(false);
              }}
            />
          </div>
        )}
        <div className="header__content">
          <NavLink to="/">
            <img src={LogoImg} alt="" />
          </NavLink>
          <div className="">
            <div className="header__box">
              <NavLink
                to={user.isLogin ? '/account' : '/login'}
                className="header__link">
                Account
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
                <div className="header__icon-counter">{cart.subQuantity}</div>
              </NavLink>
              <Search
                ref={searchRef}
                onClick={() => setPopapOpen(true)}
                className="header__icon-search"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;

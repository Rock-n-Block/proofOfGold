import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { Header, Footer } from './components';
import {
  HomePage,
  FranchisePage,
  ShopPage,
  CoinsPage,
  BarsPage,
  ProductPage,
  CartPage,
  LoginPage,
  AccountPage,
  DeliveryPage,
  LegalPage,
  ErrorPage,
  SearchPage,
  CheckoutPage,
  VerifyPage,
  ResetPasswordPage,
  ChangePasswordPage,
  SecurityPage,
} from './pages';
import { useMst } from './store/root';

import './styles/index.scss';
import axios from './core/axios';

const App: React.FC = observer(() => {
  const { productsStore, user, cart } = useMst();

  React.useEffect(() => {
    productsStore.loadProducts();

    if (localStorage.access_token) {
      user.getMe();
    }
    axios
      .get('https://www.cloudflare.com/cdn-cgi/trace?format=jsonp')
      .then(({ data }) => console.log(data, '\n cloudflare'));
    // axios
    //   .get('http://www.geoplugin.net/json.gp')
    //   .then(({ data }) => console.log(data, '\n geoplugin'));
    // axios
    //   .get('http://ip-api.com/json')
    //   .then(({ data }) => console.log(data, '\n ip-api'));
    // axios
    //   .get('https://api.ipify.org?format=jsonp')
    //   .then(({ data }) => console.log(data, '\n ipdata'));
    // axios
    //   .get('https://jsonip.com')
    //   .then(({ data }) => console.log(data, '\n jsonip'));
  }, []);
  return (
    <div className="proof">
      <Header />
      <Switch>
        <Route exact path="/franchise" component={FranchisePage} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/coins" component={CoinsPage} />
        <Route exact path="/bars" component={BarsPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/product/:productId" component={ProductPage} />
        <Route
          path="/account"
          render={() => (user.isLogin ? <AccountPage /> : <Redirect to="/" />)}
        />
        <Route exact path="/delivery-information" component={DeliveryPage} />
        <Route exact path="/legal" component={LegalPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route
          exact
          path="/checkout"
          render={() =>
            user.isLogin ? (
              cart.items.length ? (
                <CheckoutPage />
              ) : (
                <Redirect to="/" />
              )
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          exact
          path={['/verify', '/verify/:token']}
          component={VerifyPage}
        />
        <Route
          exact
          path={['/lost', '/lost/check', '/lost/ok']}
          component={ResetPasswordPage}
        />
        <Route exact path="/change/:token" component={ChangePasswordPage} />
        <Route exact path="/security" component={SecurityPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
      <Footer />
    </div>
  );
});

export default App;

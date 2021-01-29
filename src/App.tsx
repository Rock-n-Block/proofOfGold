import React from 'react';
import { Switch, Route } from 'react-router-dom';
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
} from './pages';
import { useMst } from './store/root';

import './styles/index.scss';

const App: React.FC = observer(() => {
  const { productsStore } = useMst();

  React.useEffect(() => {
    productsStore.loadProducts();
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
        <Route path="/account" component={AccountPage} />
        <Route exact path="/delivery-information" component={DeliveryPage} />
        <Route exact path="/legal" component={LegalPage} />
      </Switch>
      <Footer />
    </div>
  );
});

export default App;

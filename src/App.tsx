import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header, Footer } from './components';
import { HomePage, FranchisePage } from './pages';

import './styles/index.scss';

function App() {
  return (
    <div className="proof">
      <Header />
      <Switch>
        <Route exact path="/franchise" component={FranchisePage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

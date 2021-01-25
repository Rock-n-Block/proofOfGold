import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components';
import { HomePage, FranchisePage } from './pages';

import './styles/index.scss';

function App() {
  return (
    <div className="proof">
      <Header />
      <Switch>
        <Route path="/franchise" component={FranchisePage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

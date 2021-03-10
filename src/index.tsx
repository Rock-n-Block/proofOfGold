import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import ScollToTop from './ScollToTop';
import { Provider, rootStore } from './store/root';
import CheckOrderStatus from './CheckOrderStatus';

ReactDOM.render(
  <Provider value={rootStore}>
    <Router>
      <ScollToTop>
        <CheckOrderStatus>
          <App />
        </CheckOrderStatus>
      </ScollToTop>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import ScollToTop from './ScollToTop';
import { Provider, rootStore } from './store/root';

ReactDOM.render(
  <Provider value={rootStore}>
    <Router>
      <ScollToTop>
        <App />
      </ScollToTop>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

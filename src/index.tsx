import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import ScollToTop from './ScollToTop';

ReactDOM.render(
  <Router>
    <ScollToTop>
      <App />
    </ScollToTop>
  </Router>,
  document.getElementById('root'),
);

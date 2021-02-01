import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../components';

import './Error.scss';

const ErrorPage = () => {
  return (
    <div className="error">
      <div className="row error__row">
        <div className="error__subtitle text-md">404: Page Not Found</div>
        <h1 className="h1-md text-gradient error__title">
          This page could not be found!
        </h1>
        <Link to="/">
          <Button centered={true}>BACK TO HOMEPAGE</Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

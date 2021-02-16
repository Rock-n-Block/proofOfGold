import React from 'react';
import { useHistory } from 'react-router-dom';

import { SecurityForm } from '../../modules';

import './Security.scss';

const SecurityPage: React.FC = () => {
  const history = useHistory();
  return (
    <div className="security box-fullpage">
      <div className="row">
        <div className="security__content box-dark">
          <div className="security__text text-md text-uppercase">
            Please check your email for<br></br> the security code and enter it
            below
          </div>
          <SecurityForm history={history} />
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;

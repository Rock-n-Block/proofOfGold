import React from 'react';
import { useHistory, Route } from 'react-router-dom';

import { InfoBlock } from '../../components';
import { ResetPasswordForm } from '../../modules';

import './ResetPassword.scss';

import { ReactComponent as MailImg } from '../../assets/img/icons/mail.svg';
import { ReactComponent as SuccessImg } from '../../assets/img/icons/success.svg';

const ResetPassword: React.FC = () => {
  const history = useHistory();
  return (
    <div className="r-password">
      <div className="row">
        <h1 className="r-password__title text-gradient h1-md">Lost password</h1>
        <Route exact path="/lost">
          <div className="r-password__box">
            <ResetPasswordForm history={history} />
          </div>
        </Route>
      </div>
      <Route
        exact
        path="/lost/check"
        render={() => (
          <InfoBlock Icon={MailImg} text="Please check your email" />
        )}
      />
      <Route
        exact
        path="/lost/ok"
        render={() => (
          <InfoBlock Icon={SuccessImg} text="New password has been saved" />
        )}
      />
    </div>
  );
};

export default ResetPassword;

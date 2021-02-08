import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { ChangePasswordForm } from '../../modules';
import { InfoBlock } from '../../components';
import { userApi } from '../../utils/api';

import './ChangePassword.scss';

interface ParamTypes {
  token: string | undefined;
}

const ChangePasswordPage: React.FC = () => {
  const { token } = useParams<ParamTypes>();
  const [isValidToken, setValidToken] = React.useState(true);
  const history = useHistory();
  React.useEffect(() => {
    if (token) {
      userApi
        .checkResetPasswordToken(token)
        .then((res) => setValidToken(true))
        .catch(() => setValidToken(false));
    }
  }, [token]);
  return (
    <div className="ch-password">
      {isValidToken ? (
        <div className="row">
          <h1 className="ch-password__title text-gradient h1-md">
            New password
          </h1>
          <div className="ch-password__box">
            <ChangePasswordForm history={history} token={token} />
          </div>
        </div>
      ) : (
        <InfoBlock text="Your link to change password invalid" />
      )}
    </div>
  );
};

export default ChangePasswordPage;

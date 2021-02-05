import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { InfoBlock } from '../../components';
import { useMst } from '../../store/root';

import { ReactComponent as MailImg } from '../../assets/img/icons/mail.svg';
import { ReactComponent as SuccessImg } from '../../assets/img/icons/success.svg';

interface ParamTypes {
  token: string | undefined;
}

const VerifyPage: React.FC = observer(() => {
  const { user } = useMst();
  const { token } = useParams<ParamTypes>();
  const [isActivated, setActivated] = React.useState(false);
  const [alreadyActivated, setAlreadyActivated] = React.useState(false);
  console.log(token, 'token');

  React.useEffect(() => {
    if (token) {
      user
        .activate(token)
        .then(() => {
          setActivated(true);
        })
        .catch(({ message }) => {
          if (message === 'already activated') {
            setAlreadyActivated(true);
          } else {
            setActivated(false);
          }
        });
    }
  }, [token]);
  return (
    <div className="verify">
      {!token && (
        <InfoBlock
          Icon={MailImg}
          text={
            <Fragment>
              Please check your email<br></br> for account activation
            </Fragment>
          }
        />
      )}
      {token && isActivated && (
        <InfoBlock Icon={SuccessImg} text="Your account has been activated" />
      )}
      {alreadyActivated && (
        <InfoBlock Icon={SuccessImg} text="Your account already activated" />
      )}
    </div>
  );
});

export default VerifyPage;

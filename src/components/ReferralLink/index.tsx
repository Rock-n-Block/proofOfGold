import React from 'react';

import './ReferralLink.scss';
import {Button} from "../index";
import {CopyToClipboard} from 'react-copy-to-clipboard';

import copyImg from '../../assets/img/icons/copy-black.svg'
import {userApi} from "../../utils/api";

const ReferralLink: React.FC = () => {
  const [referralCode, setReferralCode] = React.useState<string>('');
  const [referralCodeIsLoading, setReferralCodeIsLoading] = React.useState<boolean>(false);
  const onGenerateLink = () => {
    setReferralCodeIsLoading(true);
    userApi
      .getReferralCode()
      .then(({ data }) => {
        setReferralCode(data.own_ref_code);
        console.log(data.own_ref_code, 'referral code');
      })
      .catch((err) => console.log(err, 'referral code'))
      .finally(() => setReferralCodeIsLoading(false));
  }

  return (
    <div className="ref-link-box">
      <div className="row">
        <h1 className="ref-link-box__title text-gradient h1-md">Referral Link</h1>
        <div className="ref-link-box__description" >
          Share your referral link and get 5% revenue from each Gold purchase
        </div>

        {
          referralCode === ''
            ?
              <Button
                className="ref-link-box__generate-button"
                onClick={onGenerateLink}
                loading={referralCodeIsLoading}
              >Generate Link</
              Button>
            :
              <div className="ref-link-box__link-container link-container">
                <div className="link-container__link">https://d-pog.com/login?ref={referralCode}</div>

                <CopyToClipboard text={'https://d-pog.com/login?ref=' + referralCode}>
                  <Button className="link-container__copy-button">
                    <img src={copyImg} alt="copy" />
                  </Button>
                </CopyToClipboard>
              </div>
        }
      </div>
    </div>
  )
};

export default ReferralLink;

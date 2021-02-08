import React from 'react';
import classNames from 'classnames';
import QRCode from 'qrcode.react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

import { Button } from '../../components';

import './Payments.scss';

import { ReactComponent as CardImg } from '../../assets/img/icons/card.svg';
import btcImg from '../../assets/img/icons/btc.svg';
import ethImg from '../../assets/img/icons/eth.svg';
import usdcImg from '../../assets/img/icons/usdc.svg';
import copyImg from '../../assets/img/icons/copy.svg';

const Payments = () => {
  const [activePayment, setActivePayment] = React.useState('card');
  const payments = [
    {
      name: 'card',
      text: 'CREDIT CARD',
    },
    {
      name: 'btc',
      text: 'BTC',
      image: btcImg,
    },
    {
      name: 'eth',
      text: 'ETH',
      image: ethImg,
    },
    {
      name: 'usdc',
      text: 'USDC',
      image: usdcImg,
    },
  ];
  const address = '0x39u593u59593593fgdh34uj4i53j5i35';
  return (
    <div className="payments">
      <div className="payments__choose box-dark">
        <div className="payments__choose-box">
          {payments.map((payment, index) => (
            <div
              key={index}
              onClick={() => setActivePayment(payment.name)}
              className={classNames('payments__choose-item text-bold', {
                active: activePayment === payment.name,
              })}>
              {payment.name !== 'card' && (
                <img
                  src={payment.image}
                  alt="payment"
                  className="payments__choose-item-img"
                />
              )}
              {payment.name === 'card' && (
                <CardImg className="payments__choose-item-img" />
              )}
              <span>{payment.text}</span>
            </div>
          ))}
        </div>
        <Button size="lg" centered={true} className="payments__continue">
          Continue
        </Button>
      </div>
      {address && activePayment !== 'card' && (
        <div className="box-dark payments__send">
          <div className="payments__send-title text-bold text-gradient">
            Send your 100.0101 {activePayment.toUpperCase()} to the following
            address
          </div>
          <div className="payments__send-copy">
            <div className="payments__send-copy-address text-bold">
              {address}
            </div>
            <CopyToClipboard text={address}>
              <img src={copyImg} alt="copy" />
            </CopyToClipboard>
          </div>
          <div className="payments__send-qr">
            <div className="payments__send-qr-title text-gradient text-bold">
              OR scan this QR code
            </div>
            <div className="payments__send-qr-box">
              <QRCode value={address} bgColor="#fff" fgColor="#000" />
            </div>
          </div>
          <div className="payment__send-text">
            As soon as your transaction is confirmed on the blockchain, your
            order will be available in{' '}
            <Link className="text-bold text-gradient" to="/account/orders">
              My orders
            </Link>
            , and you’ll receive an email.
          </div>
        </div>
      )}
    </div>
  );
};

export default Payments;

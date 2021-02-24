import React from 'react';
import classNames from 'classnames';
import QRCode from 'qrcode.react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { useFormikContext } from 'formik';
import { observer } from 'mobx-react-lite';

import { Button } from '../../components';
import { storeApi, payApi } from '../../utils/api';
import { useMst } from '../../store/root';

import './Payments.scss';

import { ReactComponent as CardImg } from '../../assets/img/icons/card.svg';
import btcImg from '../../assets/img/icons/btc.svg';
import ethImg from '../../assets/img/icons/eth.svg';
import usdcImg from '../../assets/img/icons/usdc.svg';
import copyImg from '../../assets/img/icons/copy.svg';

const Payments = observer(() => {
  const { cart } = useMst();
  const formik = useFormikContext();

  const [activePayment, setActivePayment] = React.useState('card');
  const [addresses, setAddresses] = React.useState<any>(null);
  const [rates, setRates] = React.useState<any>({});
  const [activeAddress, setActiveAddress] = React.useState<string>('');
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

  const onSubmit = (): void => {
    const values: any = formik.values;
    formik.setValues({
      ...values,
      currency: activePayment,
    });
    formik.handleSubmit();
    onContinue();
  };

  React.useEffect(() => {
    storeApi
      .getCryptoAddresses()
      .then(({ data }) => {
        setAddresses(data);
      })
      .catch((err) => console.log(err, 'get crypto addresses'));
    payApi
      .getRates()
      .then(({ data }) => {
        setRates(data);
      })
      .catch((err) => console.log(err, 'get crypto rates'));
  }, []);

  const onContinue = (): void => {
    setActiveAddress(
      activePayment === 'usdc'
        ? addresses['eth_address']
        : addresses[`${activePayment}_address`],
    );
  };

  const onChangeCurrency = (name: string): void => {
    setActiveAddress('');
    setActivePayment(name);
  };

  return (
    <div className="payments">
      <div className="payments__choose box-dark">
        <div className="payments__choose-box">
          {payments.map((payment, index) => (
            <div
              key={index}
              onClick={() => onChangeCurrency(payment.name)}
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
        <Button
          size="lg"
          centered={true}
          className="payments__continue"
          onClick={onSubmit}>
          Continue
        </Button>
      </div>
      {activePayment !== 'card' && activeAddress && (
        <div className="box-dark payments__send">
          <div className="payments__send-title text-bold text-gradient">
            Send your{' '}
            {activePayment.toUpperCase() === 'USDC'
              ? cart.subTotal / rates['USDT']
              : cart.subTotal / rates[activePayment.toUpperCase()]}{' '}
            {activePayment.toUpperCase()} to the following address
          </div>
          <div className="payments__send-copy">
            <div className="payments__send-copy-address text-bold">
              {activeAddress}
            </div>
            <CopyToClipboard text={activeAddress}>
              <img src={copyImg} alt="copy" />
            </CopyToClipboard>
          </div>
          <div className="payments__send-qr">
            <div className="payments__send-qr-title text-gradient text-bold">
              OR scan this QR code
            </div>
            <div className="payments__send-qr-box">
              <QRCode value={activeAddress} bgColor="#fff" fgColor="#000" />
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
});

export default Payments;

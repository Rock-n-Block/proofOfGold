import React from 'react';
import classNames from 'classnames';
import QRCode from 'qrcode.react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { useFormikContext } from 'formik';
import { observer } from 'mobx-react';
import BigNumber from 'bignumber.js';

import { Button, Paypal } from '../../components';
import { payApi } from '../../utils/api';
import { useMst } from '../../store/root';

import './Payments.scss';

import { ReactComponent as CardImg } from '../../assets/img/icons/card.svg';
import btcImg from '../../assets/img/icons/btc.svg';
import ethImg from '../../assets/img/icons/eth.svg';
import usdcImg from '../../assets/img/icons/usdc.svg';
import copyImg from '../../assets/img/icons/copy.svg';

const Payments = observer(({ isShowAddress, setShowAddress }: any) => {
  const { checkout, cart } = useMst();
  const formik = useFormikContext();

  const [rates, setRates] = React.useState<any>({});
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
    if (checkout.activePayment !== 'card') {
      formik.setValues({
        ...values,
        currency: checkout.activePayment,
      });

      formik.validateForm().then((res) => {
        if (!Object.keys(res).length) {
          formik.handleSubmit();
        } else {
          let touched: any = {};
          Object.keys(res).map((key) => {
            touched[key] = true;
          });

          formik.setTouched(touched);

          formik.setErrors(res);
        }
      });
    } else {
      formik.validateForm().then((res) => console.log(res, 'formik'));
    }
  };

  React.useEffect(() => {
    checkout.getAddresses();
    payApi
      .getRates()
      .then(({ data }) => {
        setRates(data);
      })
      .catch((err) => console.log(err, 'get crypto rates'));
  }, []);

  const onChangeCurrency = (name: string): void => {
    setShowAddress(false);
    checkout.clearActiveAddress();
    checkout.setActivePayment(name);
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
                active: checkout.activePayment === payment.name,
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
      {checkout.activePayment === 'card' &&
      checkout.getActiveAddress === 'card' ? (
        <div className="box-dark payments__send">
          <Paypal />
        </div>
      ) : (
        ''
      )}
      {checkout.activePayment !== 'card' &&
        checkout.getActiveAddress &&
        isShowAddress && (
          <div className="box-dark payments__send">
            <div className="payments__send-title text-bold text-gradient">
              Send your
              {checkout.activePayment.toUpperCase() === 'USDC'
                ? cart.subTotal / rates['USDT']
                : new BigNumber(cart.subTotal)
                    .dividedBy(rates[checkout.activePayment.toUpperCase()])
                    .toFixed(8)}{' '}
              {checkout.activePayment.toUpperCase()} to the following address
            </div>
            <div className="payments__send-copy">
              <div className="payments__send-copy-address text-bold">
                {checkout.getActiveAddress}
              </div>
              <CopyToClipboard text={checkout.getActiveAddress}>
                <img src={copyImg} alt="copy" />
              </CopyToClipboard>
            </div>
            <div className="payments__send-qr">
              <div className="payments__send-qr-title text-gradient text-bold">
                OR scan this QR code
              </div>
              <div className="payments__send-qr-box">
                <QRCode
                  value={checkout.getActiveAddress}
                  bgColor="#fff"
                  fgColor="#000"
                />
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

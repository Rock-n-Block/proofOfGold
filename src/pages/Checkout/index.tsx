import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';

import { useMst } from '../../store/root';
import { ShippingForm } from '../../modules';
import { Button } from '../../components';

import './Checkout.scss';

import successImg from '../../assets/img/icons/success.svg';

const ChackoutPage: React.FC = observer(() => {
  const { user } = useMst();
  const [isModalVisible, setModalVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!user.shipping_address?.first_name) {
      user.getShippingAddress();
    }
  }, []);

  return (
    <div className="checkout">
      <div className="row">
        <div className="checkout__title text-gradient h1-md">Checkout</div>
        {!user.isLogin && (
          <div className="checkout__login text-md">
            RETURNING CUSTOMER? CLICK HERE TO{' '}
            <Link className="text-gradient text-bold" to="/login">
              LOGIN
            </Link>
          </div>
        )}
        <ShippingForm {...user} />

        {!user.isLogin && (
          <div className="login__info text-md">
            <p>By creating an account:</p>
            <p>
              (a) You consent to Denarius Financial Services AG and its related
              corporations, to collecting, using, disclosing and/or processing
              your personal data, in order to contact you about products and
              services marketed by Denarius Financial Services AG or its other
              business as well as benefits , promotions and rewards, using your
              contact email which Denarius Financial Services AG may have in its
              records from time to time.
            </p>
            <p>
              (b) You confirm and agree that your consent granted here in do not
              supersede or replace any other consents which you may have
              previously provided to Denarius Financial Services AG and its
              related corporations in respect of your personal data, and are
              additional to any rights which to Denarius Financial Services AG
              and its related corporations may have at law to collect, use or
              disclose your personal data.
            </p>
            <p>
              For more information about our Terms and Condition and privacy
              Policy, please see the{' '}
              <Link to="legal" className="text-gradient login__link">
                Legal Page
              </Link>
              .
            </p>
          </div>
        )}
      </div>
      <Modal
        centered={true}
        footer={false}
        closable={false}
        visible={isModalVisible}
        onCancel={() => setModalVisible(false)}
        className="modal checkout__modal">
        <div className="modal__box checkout__modal-box">
          <img src={successImg} alt="" />
          <div className="text-gradient checkout__modal-title">
            Thank you for your purchase!
          </div>
          <div className="checkout__modal-text text-md">
            You’ll receive an email with your order details soon.
          </div>
          <div className="checkout__modal-btns">
            <Link to="/shop" className="checkout__modal-btn">
              <Button>continue shopping</Button>
            </Link>
            <Link to="/account/orders" className="checkout__modal-btn">
              <Button>My orders</Button>
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
});

export default ChackoutPage;

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
        <ShippingForm {...user} />
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

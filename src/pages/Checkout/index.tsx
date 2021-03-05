import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link, useHistory } from 'react-router-dom';
import { Modal, notification } from 'antd';

import { useMst } from '../../store/root';
import { ShippingForm } from '../../modules';
import { Button } from '../../components';

import './Checkout.scss';

import successImg from '../../assets/img/icons/success.svg';
import { ReactComponent as CloseImg } from '../../assets/img/icons/close.svg';

const ChackoutPage: React.FC = observer(() => {
  const { user, cart } = useMst();
  const history = useHistory();
  const [isModalVisible, setModalVisible] = React.useState<boolean>(false);

  const openNotificationWithIcon = (name: string) => {
    notification.open({
      message: `Sorry but ${name} is already reserved by another buyer`,
      duration: 0,
      placement: 'bottomRight',
      closeIcon: <CloseImg />,
    });
  };

  React.useEffect(() => {
    if (user.isLogin) {
      if (!user.shipping_address?.first_name) {
        user.getShippingAddress();
      }
      if (!user.billing_address?.first_name) {
        user.getBillingAddress();
      }
    }
  }, []);
  React.useEffect(() => {
    cart.items.map((item) => {
      if (item.product.supply <= 0) {
        cart.remove(item.product.id);
      }
    });
    if (!cart.items.length) {
      history.push('/');
    }
  }, [cart]);

  return (
    <div className="checkout">
      <div className="row">
        <div className="checkout__title text-gradient h1-md">Checkout</div>
        <ShippingForm
          {...user}
          openNotif={openNotificationWithIcon}
          isBillingValid={!!user.billing_address?.first_name}
          isShippingValid={!!user.shipping_address?.first_name}
        />
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

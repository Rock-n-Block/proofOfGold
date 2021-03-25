import React from 'react';
import moment from 'moment';

import { userApi } from '../../utils/api';

import './Orders.scss';

import coinImg from '../../assets/img/products/5gram.svg';
import goldImg from '../../assets/img/products/gold.jpg';

const Orders: React.FC = () => {
  const [orders, setOrders] = React.useState<any>([]);
  React.useEffect(() => {
    userApi
      .getOrders()
      .then(({ data }) => {
        setOrders(data);
        console.log(data, 'orders');
      })
      .catch((err) => console.log(err, 'orders'));
  }, []);
  return (
    <div className="orders">
      {orders.length ? (
        orders.map((order: any, index: number) => (
          <div key={index} className="orders__item">
            <div className="orders__item-info text-md">
              <div className="orders__item-info-box">
                <div className="orders__item-info-date">
                  Order from {moment(order.date).format('MMMM D')}
                </div>
                <div className="orders__item-info-cost text-lg text-gradient">
                  ${order.cost}
                </div>
              </div>
              <div className="orders__item-info-box">
                <div className="orders__item-info-id">Order # {order.id}</div>
                <div className="orders__item-info-payment">
                  Paid {order.payment}
                </div>
              </div>
            </div>
            {order.products.map((product: any, index: number) => (
              <div key={index} className="orders__item-product">
                <img
                  src={`https://${product.img}`}
                  alt=""
                  className="orders__item-product-img"
                />
                <div className="orders__item-product-info">
                  <div className="orders__item-product-element orders__item-product-name">
                    {window.innerWidth < 776 ? (
                      <span className="text-uppercase text-bold">PRODUCT</span>
                    ) : (
                      ''
                    )}
                    {product.name}
                  </div>
                  <div className="orders__item-product-element orders__item-product-count">
                    {window.innerWidth < 776 ? (
                      <span className="text-uppercase">QUANTITY</span>
                    ) : (
                      ''
                    )}
                    <span className=" text-gradient text-lg">
                      {product.count}
                    </span>
                  </div>
                  <div className="orders__item-product-element orders__item-product-cost">
                    {window.innerWidth < 776 ? (
                      <span className="text-uppercase">PRICE</span>
                    ) : (
                      ''
                    )}
                    <span className=" text-gradient  text-lg">
                      ${product.cost}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))
      ) : (
        <div className="text-gradient text-md">
          You haven't made a purchase yet or the payment transaction hasn't gone
          through yet.
        </div>
      )}
    </div>
  );
};

export default Orders;

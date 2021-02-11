import React from 'react';
import moment from 'moment';

import './Orders.scss';

import coinImg from '../../assets/img/products/5gram.svg';
import goldImg from '../../assets/img/products/gold.jpg';

const Orders: React.FC = () => {
  const orders = [
    {
      date: '23.12.2020',
      cost: 12.144,
      id: '02677982-0055',
      payment: 'Paid Online card',
      products: [
        {
          img: coinImg,
          name: '5 grams – Ducatus Prime Gold Coin',
          count: 3,
          cost: 12.144,
        },
        {
          img: goldImg,
          name: '5 grams – Ducatus Prime Gold Coin',
          count: 3,
          cost: 12.144,
        },
      ],
    },
    {
      date: '23.12.2020',
      cost: 12.144,
      id: '02677982-0055',
      payment: 'Paid Online card',
      products: [
        {
          img: coinImg,
          name: '5 grams – Ducatus Prime Gold Coin',
          count: 3,
          cost: 12.144,
        },
      ],
    },
  ];
  return (
    <div className="orders">
      {orders.map((order, index) => (
        <div key={index} className="orders__item">
          <div className="orders__item-info text-md">
            <div className="orders__item-info-box">
              <div className="orders__item-info-date">
                Order from {moment().format('MMMM D')}
              </div>
              <div className="orders__item-info-cost text-lg text-gradient">
                ${order.cost}
              </div>
            </div>
            <div className="orders__item-info-box">
              <div className="orders__item-info-id">{order.id}</div>
              <div className="orders__item-info-payment">Paid Online card</div>
            </div>
          </div>
          {order.products.map((product, index) => (
            <div key={index} className="orders__item-product">
              <img
                src={product.img}
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
                    ${product.count}
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
      ))}
    </div>
  );
};

export default Orders;

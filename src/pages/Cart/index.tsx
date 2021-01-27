import React from 'react';

import { CartItem, Button } from '../../components';

import './Cart.scss';

import coinImg from '../../assets/img/products/5gram.svg';
import goldImg from '../../assets/img/products/gold.jpg';

const CartPage: React.FC = () => {
  const products = [
    {
      img: coinImg,
      name: '5 grams – Ducatus Prime Gold Coin',
      price: '472',
      quantity: 3,
    },
    {
      img: goldImg,
      name: '144 grams – Ducatus Prime Gold Bar',
      price: '472',
      quantity: 1,
    },
  ];
  return (
    <div className="cart">
      <div className="row">
        <h1 className="cart__title h1-md text-gradient">Cart</h1>
        {products.map((product, index) => (
          <CartItem key={index} isFirst={index === 0} {...product} />
        ))}
        <div className="cart__total">
          <div className="cart__total-title">Total</div>
          <div className="cart__total-cost text-gradient h1-md">$13,560</div>
          <Button>PROCEED TO CHECKOUT</Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

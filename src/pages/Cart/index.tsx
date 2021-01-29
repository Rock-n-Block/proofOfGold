import React from 'react';
import { Link } from 'react-router-dom';

import { CartItem, Button } from '../../components';
import { CartItemProps } from '../../components/CartItem';
import './Cart.scss';

import coinImg from '../../assets/img/products/5gram.svg';
import goldImg from '../../assets/img/products/gold.jpg';

const CartPage: React.FC = () => {
  const products: Array<any> = [
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
        {products.length ? (
          <>
            <h1 className="cart__title h1-md text-gradient">Cart</h1>
            {products.length &&
              products.map((product, index) => (
                <CartItem key={index} isFirst={index === 0} {...product} />
              ))}
            <div className="cart__total">
              <div className="cart__total-title">Total</div>
              <div className="cart__total-cost text-gradient h1-md">
                $13,560
              </div>
              <Button>PROCEED TO CHECKOUT</Button>
            </div>
          </>
        ) : (
          <div className="cart__empty">
            <h1 className="cart__empty-title text-gradient">
              YOUR CART IS CURRENTLY EMPTY.
            </h1>
            <Link to="/shop">
              <Button>RETURN TO SHOP</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;

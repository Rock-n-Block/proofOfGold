import React from 'react';

import { Counter } from '../../components';

import './CartItem.scss';

import deleteImg from '../../assets/img/cart/delete.svg';

interface CartItemProps {
  img: string;
  name: string;
  price: string | number;
  quantity: number;
  isFirst: boolean;
}

const CartItem: React.FC<CartItemProps> = ({
  img,
  name,
  price,
  quantity,
  isFirst,
}) => {
  return (
    <div className="c-item">
      <div className="c-item__close-box">
        <img src={deleteImg} className="c-item__close" />
      </div>
      <img src={img} alt="" className="c-item__img" />
      <div className="c-item__elem">
        {isFirst && <span>PRODUCT</span>}
        <div className="c-item__name">{name}</div>
      </div>
      <div className="c-item__elem">
        {isFirst && <span>PRICE</span>}
        <div className=" text-lg text-gradient c-item__cost">${price}</div>
      </div>
      <div className="c-item__elem">
        {isFirst && <span>QUANTITY</span>}
        <Counter min={0} value={quantity} onChange={() => {}} />
      </div>
      <div className="c-item__elem">
        {isFirst && <span>SUBTOTAL</span>}
        <div className=" text-lg text-gradient c-item__cost">$1,416</div>
      </div>
    </div>
  );
};

export default CartItem;

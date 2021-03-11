import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

import { Counter } from '../../components';
import numberWithCommas from '../../utils/numberWithCommas';
import { useMst } from '../../store/root';

import './CartItem.scss';

import deleteImg from '../../assets/img/cart/delete.svg';

export interface CartItemProps {
  image: string;
  id: string;
  name: string;
  price: number;
  quantity: number;
  isFirst?: boolean;
  supply: number;
  totalPrise: number;
  addMore: () => void;
  deleteOneOf: () => void;
  deleteCurrent: () => void;
  total_supply: number;
}

const CartItem: React.FC<CartItemProps> = observer(
  ({
    id,
    image,
    name,
    price,
    quantity,
    totalPrise,
    addMore,
    deleteOneOf,
    supply,
    deleteCurrent,
  }) => {
    return (
      <div className="c-item">
        <div className="c-item__wrapper">
          <div className="c-item__close-box">
            <img
              src={deleteImg}
              className="c-item__close"
              onClick={() => deleteCurrent()}
            />
          </div>
          <Link to={`/product/${id}`}>
            <img src={`https://${image}`} alt="" className="c-item__img" />
          </Link>
        </div>
        <div className="c-item__box">
          <div className="c-item__elem">
            <span className="text-bold">PRODUCT</span>
            <div className="c-item__name">{name}</div>
          </div>
          <div className="c-item__elem">
            <span>PRICE</span>
            <div className=" text-lg text-gradient c-item__cost">
              ${numberWithCommas(price)}
            </div>
          </div>
          <div className="c-item__elem">
            <span>QUANTITY</span>
            <Counter
              onIncrease={addMore}
              onDecrease={deleteOneOf}
              min={0}
              max={supply}
              isInput={false}
              value={quantity}
              onChange={() => {}}
            />
          </div>
          <div className="c-item__elem">
            <span>SUBTOTAL</span>
            <div className=" text-lg text-gradient c-item__cost">
              ${numberWithCommas(totalPrise)}
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default CartItem;

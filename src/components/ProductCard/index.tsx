import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';

import { Button } from '../../components';
import numberWithCommas from '../../utils/numberWithCommas';
import { useMst } from '../../store/root';

import './ProductCard.scss';

export interface IProduct {
  id: string;
  group: string;
  name: string;
  image: string;
  total_supply: number;
  supply: number;
  sold: number;
  price: number;
}

const ProductCard: React.FC<IProduct> = observer(
  ({ id, name, price, image, group, supply }) => {
    const { cart } = useMst();
    const handleAdd = () => {
      cart.addProduct(id);
    };
    return (
      <div
        className={classNames('p-card', {
          'p-card__coin': group === 'gold_coins',
        })}>
        <Link to={`/product/${id}`} className="p-card__img">
          <img src={`https://${image}`} alt="" />
        </Link>
        <div className="p-card__box">
          <div className="p-card__name">{name}</div>
          <div className="p-card__cost h2">${numberWithCommas(price)}</div>
          {supply > 0 ? (
            <Button size="sm" centered={true} icon="cart" onClick={handleAdd}>
              ADD to cart
            </Button>
          ) : (
            <Button size="sm" centered={true} disabled={true}>
              Sold out
            </Button>
          )}
        </div>
      </div>
    );
  },
);

export default ProductCard;

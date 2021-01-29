import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../components';
import numberWithCommas from '../../utils/numberWithCommas';

import './ProductCard.scss';

interface ProductCard {
  id: number;
  image: string;
  name: string;
  price: number;
}

const ProductCard: React.FC<ProductCard> = ({ id, name, price, image }) => {
  return (
    <div className="p-card">
      <Link to={`/product/${id}`} className="p-card__img">
        <img src={`https://${image}`} alt="" />
      </Link>
      <div className="p-card__box">
        <div className="p-card__name">{name}</div>
        <div className="p-card__cost h2">${numberWithCommas(price)}</div>
        <Button size="sm" centered={true} icon="cart">
          ADD to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

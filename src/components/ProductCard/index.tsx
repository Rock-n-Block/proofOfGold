import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../components';

import './ProductCard.scss';

interface ProductCard {
  img: string;
  name: string;
  cost: string;
}

const ProductCard: React.FC<ProductCard> = ({ name, cost, img }) => {
  return (
    <div className="p-card">
      <Link to={`/product/1`} className="p-card__img">
        <img src={img} alt="" />
      </Link>
      <div className="p-card__box">
        <div className="p-card__name">{name}</div>
        <div className="p-card__cost h2">${cost}</div>
        <Button size="sm" centered={true} icon="cart">
          ADD to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

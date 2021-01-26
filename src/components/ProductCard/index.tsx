import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../components';

import './ProductCard.scss';

import { ReactComponent as Cart } from '../../assets/img/cart.svg';

interface ProductCard {
  img: string;
  name: string;
  cost: string;
}

const ProductCard: React.FC<ProductCard> = ({ name, cost, img }) => {
  return (
    <div className="p-card">
      <Link to={`/product/id`} className="p-card__img">
        <img src={img} alt="" />
      </Link>
      <div className="p-card__box">
        <div className="p-card__name">{name}</div>
        <div className="p-card__cost h2">${cost}</div>
        <Button size="sm" centered={true}>
          <Cart className="p-card__cart" />
          ADD to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

import React from 'react';

import { ProductCard } from '../../components';

import coinImg from '../../assets/img/products/5gram.svg';
import goldImg from '../../assets/img/products/gold.jpg';

const ShopPage: React.FC = () => {
  return (
    <div className="products">
      <div className="row">
        <h1 className="products-title h2 text-gradient">Products</h1>
        <div className="box-products">
          {new Array(5).fill(0).map((_, index) => (
            <ProductCard
              key={index}
              img={coinImg}
              name="5 grams – Ducatus Prime Gold Coin"
              cost="472"
            />
          ))}
          {new Array(5).fill(0).map((_, index) => (
            <ProductCard
              key={index}
              img={goldImg}
              name="144 grams – Ducatus Prime Gold Bar"
              cost="12,144"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;

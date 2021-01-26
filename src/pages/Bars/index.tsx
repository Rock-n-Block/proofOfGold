import React from 'react';

import { ProductCard } from '../../components';

import goldImg from '../../assets/img/products/gold.jpg';

const ShopPage: React.FC = () => {
  return (
    <div className="products">
      <div className="row">
        <h1 className="products-title h2 text-gradient">Gold Bars</h1>
        <div className="box-products">
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

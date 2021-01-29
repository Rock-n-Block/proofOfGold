import React from 'react';
import { observer } from 'mobx-react-lite';

import { ProductCard } from '../../components';
import { useMst } from '../../store/root';

import goldImg from '../../assets/img/products/gold.jpg';

const ShopPage: React.FC = observer(() => {
  const { productsStore } = useMst();
  return (
    <div className="products">
      <div className="row">
        <h1 className="products-title h2 text-gradient">Gold Bars</h1>
        <div className="box-products">
          {productsStore.getBars.map((bar) => (
            <ProductCard
              key={bar.id}
              id={bar.id}
              name={bar.name}
              price={bar.price}
              image={bar.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default ShopPage;

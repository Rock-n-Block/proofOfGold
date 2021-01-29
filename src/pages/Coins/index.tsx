import React from 'react';
import { observer } from 'mobx-react-lite';

import { ProductCard } from '../../components';
import { useMst } from '../../store/root';

import coinImg from '../../assets/img/products/5gram.svg';

const ShopPage: React.FC = observer(() => {
  const { productsStore } = useMst();
  return (
    <div className="products">
      <div className="row">
        <h1 className="products-title h2 text-gradient">Gold Coins</h1>
        <div className="box-products">
          {productsStore.getCoins.map((coin) => (
            <ProductCard key={coin.id} {...coin} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default ShopPage;

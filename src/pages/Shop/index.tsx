import React from 'react';
import { observer } from 'mobx-react-lite';

import { ProductCard } from '../../components';
import { useMst } from '../../store/root';

const ShopPage: React.FC = observer(() => {
  const { productsStore } = useMst();
  return (
    <div className="products">
      <div className="row">
        <h1 className="products-title h2 text-gradient">Products</h1>
        <div className="box-products">
          {productsStore.getProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
});

export default ShopPage;

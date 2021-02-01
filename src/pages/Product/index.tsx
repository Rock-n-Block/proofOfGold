import React from 'react';
import { useParams } from 'react-router-dom';
import { Progress } from 'antd';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

import { Counter, Button, ProductReview } from '../../components';
import { ProductReviewForm } from '../../modules';
import { useMst } from '../../store/root';

import './Product.scss';

import coinImg from '../../assets/img/products/5gram.svg';
import goldImg from '../../assets/img/products/gold.jpg';

interface ParamTypes {
  productId: string | undefined;
}

const ProductPage = observer(() => {
  const { productsStore, cart } = useMst();
  const [activeTab, setActiveTab] = React.useState(1);
  // const [quantity, setQuantity] = React.useState(1);
  const { productId } = useParams<ParamTypes>();
  const [product, setProduct] = React.useState<any>({});
  let quantity = 1;
  React.useEffect(() => {
    productsStore.loadProduct(productId).then((data) => {
      setProduct(data);
    });
  }, [productId]);

  const handleAdd = () => {
    cart.addProduct(product.id + '', quantity > 0 ? quantity : 1);
  };

  console.log(quantity, 'quantity');

  return (
    <div className="product">
      {product && product.name && (
        <>
          <div className="row product__row">
            <div className="product__content">
              <div className="product__name text-gradient">{product.name}</div>
              <Progress
                percent={(product.sold / product.total_supply) * 100}
                showInfo={false}
              />
              <div className="product__count">
                {product.sold} units sold out of {product.total_supply}
              </div>
              <div className="product__cost text-gradient h1-xl">
                ${product.price}
              </div>
              <div className="product__wrapper">
                <Counter
                  min={1}
                  value={quantity}
                  max={product.total_supply - product.sold}
                  onChange={(value: number) => {
                    quantity = value;
                  }}
                />
                <Button
                  size="sm"
                  icon="cart"
                  className="product__add"
                  onClick={handleAdd}>
                  ADD to cart
                </Button>
              </div>
              <div className="product__info text">
                <div className="product__info-item">
                  <div className="product__info-item-title">
                    Total Bars in this Series:
                  </div>
                  <div className="product__info-item-value text-gradient">
                    {product.total_supply}
                  </div>
                </div>
                {/* <div className="product__info-item">
              <div className="product__info-item-title">
                Included Ducatus Coin Value:
              </div>
              <div className="product__info-item-value text-gradient">
                {product.coinValue}%
              </div>
            </div> */}
                {/* <div className="product__info-item">
              <div className="product__info-item-title">*Lucky Gram Prize:</div>
              <div className="product__info-item-value text-gradient">
                {product.luckyGram}g
              </div>
            </div> */}
                <div className="product__info-descr">
                  Every Ducatus 24K Gold Product carries the Ducatus Quality
                  Seal and is registered on the DucatusX Blockchain.
                </div>
              </div>
              <div className="product__instok">
                {product.total_supply - product.sold} in stock
              </div>
            </div>
            <div className="product__img">
              <img src={`https://${product.image}`} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="product__nav">
              <div
                onClick={() => setActiveTab(0)}
                className={classNames('product__nav-item text-lg', {
                  active: activeTab === 0,
                })}>
                Description
              </div>
              <div
                onClick={() => setActiveTab(1)}
                className={classNames('product__nav-item text-lg', {
                  active: activeTab === 1,
                })}>
                REVIEWS (0)
              </div>
            </div>
            {activeTab === 0 && (
              <div className="product__descr">
                <p> Disclaimer*</p>
                <p>
                  Prices are subject to change depending on prevailing gold
                  market value. Card designs are for illustration purposes only.
                </p>
              </div>
            )}
            {activeTab === 1 && (
              <div className="product__reviews">
                <div className="product__reviews-make">
                  <ProductReviewForm />
                </div>
                <div className="product__reviews-wrapper">
                  {new Array(3).fill(0).map((_, index) => (
                    <ProductReview
                      key={index}
                      name="name"
                      text="123"
                      rate={3}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
});

export default ProductPage;

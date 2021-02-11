import React from 'react';
import { useParams } from 'react-router-dom';
import { Progress } from 'antd';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

import { Counter, Button, ProductReview } from '../../components';
import { ProductReviewForm } from '../../modules';
import { useMst } from '../../store/root';

import './Product.scss';

interface ParamTypes {
  productId: string | undefined;
}

const ProductPage = observer(() => {
  const { productsStore, cart, user } = useMst();
  const [activeTab, setActiveTab] = React.useState(1);
  const { productId } = useParams<ParamTypes>();
  let quantity = 1;

  React.useEffect(() => {
    productsStore.loadProduct(productId);
  }, [productId]);

  const product: any = productsStore.getProduct(productId + '');

  console.log(product, 'products asdf');

  const handleAdd = () => {
    cart.addProduct(product.id + '', quantity > 0 ? quantity : 1);
  };

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
              {window.innerWidth < 776 ? (
                <div className="product__img-mobile">
                  <img src={`https://${product.image}`} alt="" />
                </div>
              ) : (
                ''
              )}
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
                REVIEWS (
                {product.reviews && product.reviews.length
                  ? product.reviews.length
                  : 0}
                )
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
                  <ProductReviewForm
                    productId={productId}
                    isLogin={user.isLogin}
                    username={user.username}
                    email={user.email}
                  />
                </div>
                <div className="product__reviews-wrapper">
                  {product.reviews && product.reviews.length
                    ? product.reviews
                        .slice()
                        .reverse()
                        .map((review: any, index: any) => (
                          <ProductReview
                            key={index}
                            name={review.name}
                            text={review.body}
                            rate={review.rate}
                          />
                        ))
                    : ''}
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

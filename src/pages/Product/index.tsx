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
  const [activeTab, setActiveTab] = React.useState(0);
  const [productCartQuantity, setProductCartQuantity] = React.useState<any>(0);
  const { productId } = useParams<ParamTypes>();
  const [quantity, setQuantity] = React.useState(1);

  React.useEffect(() => {
    productsStore.loadProduct(productId);
  }, [productId]);

  React.useEffect(() => {
    const productsInCart = cart.getProduct(productId + '')?.quantity;

    setProductCartQuantity(productsInCart ? productsInCart : 0);
    return () => {
      console.log('exit');
    };
  }, [cart.getProduct(productId + '')?.quantity]);

  const product: any = productsStore.getProduct(productId + '');

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
              {product.supply > 0 ? (
                <div className="product__wrapper">
                  <Counter
                    min={1}
                    value={quantity}
                    max={product.supply - productCartQuantity}
                    onChange={(value: number) => {
                      setQuantity(value);
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
              ) : (
                ''
              )}
              <div className="product__info text">
                <div className="product__info-item">
                  <div className="product__info-item-title">
                    Total {product.group === 'gold_coin' ? 'Coins' : 'Bars'} in
                    this Series:
                  </div>
                  <div className="product__info-item-value text-gradient">
                    {product.total_supply}
                  </div>
                </div>
                <div className="product__info-item">
                  <div className="product__info-item-title">
                    Included Ducatus Coin Value:
                  </div>
                  <div className="product__info-item-value text-gradient">
                    {product.bonus_coins}%
                  </div>
                </div>
                <div className="product__info-item">
                  <div className="product__info-item-title">
                    *Lucky Gram Prize:
                  </div>
                  <div className="product__info-item-value text-gradient">
                    {product.lucky_prize}g
                  </div>
                </div>
                <div className="product__info-descr">
                  Every Ducatus 24K Gold Product carries the Ducatus Quality
                  Seal and is registered on the DucatusX Blockchain.
                </div>
              </div>
              <div className="product__instok">
                {product.supply >= 0 ? product.supply : 0} in stock
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
                <div className="text-lg product__descr-text">
                  {product.description && product.description}
                </div>
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

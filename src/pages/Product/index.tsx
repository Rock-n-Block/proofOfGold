import React from 'react';
import { useParams } from 'react-router-dom';
import { Progress } from 'antd';
import classNames from 'classnames';

import { Counter, Button } from '../../components';
import { ProductReviewForm } from '../../modules';

import './Product.scss';

import coinImg from '../../assets/img/products/5gram.svg';
import goldImg from '../../assets/img/products/gold.jpg';

interface ParamTypes {
  productId: string | undefined;
}

const ProductPage = () => {
  const [activeTab, setActiveTab] = React.useState(1);
  const { productId } = useParams<ParamTypes>();
  const product = {
    img: goldImg,
    name: '144 grams – Ducatus Prime Gold Bar',
    cost: '12,144',
    allProducts: 610,
    soldProducts: 205,
    coinValue: '25.0',
    luckyGram: 600,
  };
  return (
    <div className="product">
      <div className="row product__row">
        <div className="product__content">
          <div className="product__name text-gradient">{product.name}</div>
          <Progress
            percent={(product.soldProducts / product.allProducts) * 100}
            showInfo={false}
          />
          <div className="product__count">
            {product.soldProducts} units sold out of {product.allProducts}
          </div>
          <div className="product__cost text-gradient h1-xl">
            ${product.cost}
          </div>
          <div className="product__wrapper">
            <Counter
              min={1}
              value={1}
              max={product.allProducts - product.soldProducts}
              onChange={(value: number) => console.log(value)}
            />
            <Button size="sm" icon="cart" className="product__add">
              ADD to cart
            </Button>
          </div>
          <div className="product__info text">
            <div className="product__info-item">
              <div className="product__info-item-title">
                Total Bars in this Series:
              </div>
              <div className="product__info-item-value text-gradient">
                {product.allProducts}
              </div>
            </div>
            <div className="product__info-item">
              <div className="product__info-item-title">
                Included Ducatus Coin Value:
              </div>
              <div className="product__info-item-value text-gradient">
                {product.coinValue}%
              </div>
            </div>
            <div className="product__info-item">
              <div className="product__info-item-title">*Lucky Gram Prize:</div>
              <div className="product__info-item-value text-gradient">
                {product.luckyGram}g
              </div>
            </div>
            <div className="product__info-descr">
              Every Ducatus 24K Gold Product carries the Ducatus Quality Seal
              and is registered on the DucatusX Blockchain.
            </div>
          </div>
          <div className="product__instok">
            {product.allProducts - product.soldProducts} in stock
          </div>
        </div>
        <div className="product__img">
          <img src={product.img} alt="" />
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
              Prices are subject to change depending on prevailing gold market
              value. Card designs are for illustration purposes only.
            </p>
          </div>
        )}
        {activeTab === 1 && (
          <div className="product__reviews">
            <div className="product__review-make">
              <ProductReviewForm />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;

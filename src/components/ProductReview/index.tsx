import React from 'react';
import { Rate } from 'antd';

import './ProductReview.scss';

import userImg from '../../assets/img/user.svg';

interface ProductReviewProps {
  name: string;
  text: string;
  rate: number;
}

const ProductReview: React.FC<ProductReviewProps> = ({ name, text, rate }) => {
  return (
    <div className="p-review">
      <img src={userImg} alt={name} className="p-review__img" />
      <div className="p-review__content">
        <div className="p-review__top">
          <div className="p-review__name text-md">{name}</div>
          <Rate value={rate} disabled={true} />
        </div>
        <div className="p-review__text">{text}</div>
      </div>
    </div>
  );
};

export default ProductReview;

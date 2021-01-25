import React from 'react';
import classNames from 'classnames';

import './InfoCard.scss';

interface infoCard {
  centered?: boolean;
  img: string;
  text: string;
  title?: JSX.Element | string;
  type?: 'lg';
}

const infoCard: React.FC<infoCard> = ({ centered, img, title, text, type }) => {
  return (
    <div
      className={classNames('i-card', type, {
        centered: centered,
        'only-text': !title,
      })}>
      <div className="i-card__wrapper">
        <img src={img} alt="" className="i-card__icon" />
        <div className="i-card__title h3">{title}</div>
        <div className="i-card__text text">{text}</div>
      </div>
    </div>
  );
};

export default infoCard;

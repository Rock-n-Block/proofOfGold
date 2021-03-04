import React from 'react';
import classNames from 'classnames';

import { Button } from '../../components';

import './InfoCard.scss';

interface infoCard {
  centered?: boolean;
  img: string;
  text: string;
  title?: JSX.Element | string;
  type?: 'lg';
  link?: string;
  btnText?: string;
}

const infoCard: React.FC<infoCard> = ({
  centered,
  img,
  title,
  text,
  type,
  link,
  btnText,
}) => {
  return (
    <div
      className={classNames('i-card', type, {
        centered: centered,
        'only-text': !title,
      })}>
      <div className="i-card__wrapper">
        <img src={img} alt="" className="i-card__icon" />
        {title && <div className="i-card__title h3">{title}</div>}
        <div className="i-card__text text">{text}</div>
        {link && btnText ? (
          <a href={link} className="i-card__link" target="_blank">
            <Button colorScheme="black">{btnText}</Button>
          </a>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default infoCard;

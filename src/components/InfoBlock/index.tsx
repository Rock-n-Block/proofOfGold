import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../components';

import './InfoBlock.scss';

interface InfoBlockProps {
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text?: any;
  btnText?: string;
  link?: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ Icon, text, btnText, link }) => {
  return (
    <div className="i-block">
      <div className="row">
        <div className="i-block__content">
          {Icon ? <Icon /> : ''}
          {text ? (
            <div className="i-block__text text-gradient">{text}</div>
          ) : (
            ''
          )}
          {btnText && link ? (
            <Link to={link} className="i-block__btn">
              <Button centered={true}>{btnText}</Button>
            </Link>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;

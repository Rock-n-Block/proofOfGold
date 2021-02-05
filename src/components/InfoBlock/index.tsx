import React from 'react';

import './InfoBlock.scss';

interface InfoBlockProps {
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text?: any;
  btnText?: string;
  link?: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ Icon, text }) => {
  return (
    <div className="i-block box-fullpage">
      <div className="row">
        <div className="i-block__content">
          {Icon && <Icon />}
          {text && <div className="i-block__text text-gradient">{text}</div>}
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;

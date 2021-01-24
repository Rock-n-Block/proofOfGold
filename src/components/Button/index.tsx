import React from 'react';
import { Button as BtnAntd } from 'antd';
import classNames from 'classnames';

const Button: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
}) => {
  return (
    <BtnAntd className={classNames(className, 'text-md btn')}>
      {children}
    </BtnAntd>
  );
};

export default Button;

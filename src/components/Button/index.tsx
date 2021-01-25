import React from 'react';
import { Button as BtnAntd } from 'antd';
import classNames from 'classnames';

interface ButtonProps {
  type?: 'lg';
}

const Button: React.FC<React.HTMLAttributes<HTMLDivElement> & ButtonProps> = ({
  children,
  className,
  type,
}) => {
  return (
    <BtnAntd className={classNames(className, 'text-md btn', `btn-${type}`)}>
      {children}
    </BtnAntd>
  );
};

export default Button;

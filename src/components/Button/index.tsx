import React, { ImgHTMLAttributes } from 'react';
import { Button as BtnAntd } from 'antd';
import classNames from 'classnames';

interface ButtonProps {
  type?: 'lg' | 'sm';
  centered?: boolean;
}

const Button: React.FC<React.HTMLAttributes<HTMLDivElement> & ButtonProps> = ({
  children,
  className,
  type,
  centered,
}) => {
  return (
    <BtnAntd
      className={classNames(className, 'text-md btn', `btn-${type}`, {
        centered: centered,
      })}>
      {children}
    </BtnAntd>
  );
};

export default Button;

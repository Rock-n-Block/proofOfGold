import React from 'react';
import { Button as BtnAntd } from 'antd';
import classNames from 'classnames';

interface ButtonProps {
  size?: 'lg' | 'sm';
  centered?: boolean;
  onClick?: () => void;
}

const Button: React.FC<React.HTMLAttributes<HTMLDivElement> & ButtonProps> = ({
  children,
  className,
  size,
  centered,
  onClick,
}) => {
  return (
    <BtnAntd
      onClick={onClick}
      className={classNames(className, 'text-md btn', `btn-${size}`, {
        centered: centered,
      })}>
      {children}
    </BtnAntd>
  );
};

export default Button;

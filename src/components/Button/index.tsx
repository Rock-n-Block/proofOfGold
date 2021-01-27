import React from 'react';
import { Button as BtnAntd } from 'antd';
import classNames from 'classnames';

import { ReactComponent as Cart } from '../../assets/img/cart.svg';

interface ButtonProps {
  size?: 'lg' | 'sm';
  centered?: boolean;
  colorScheme?: 'black';
  onClick?: () => void;
  className?: string;
  icon?: 'cart';
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  size,
  centered,
  colorScheme,
  onClick,
  icon,
}) => {
  return (
    <BtnAntd
      onClick={onClick}
      className={classNames(
        className,
        'text-md btn',
        `btn-${size}`,
        `btn-${colorScheme}`,
        {
          centered: centered,
        },
      )}>
      {icon === 'cart' && <Cart />}
      {children}
    </BtnAntd>
  );
};

export default Button;

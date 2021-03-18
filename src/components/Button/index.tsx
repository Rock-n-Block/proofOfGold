import React from 'react';
import { Button as BtnAntd } from 'antd';
import classNames from 'classnames';

import { ReactComponent as Cart } from '../../assets/img/cart.svg';
import SpinnerImg from '../../assets/img/icons/spinner.svg';

interface ButtonProps {
  size?: 'lg' | 'sm';
  centered?: boolean;
  colorScheme?: 'black';
  onClick?: () => void;
  className?: string;
  icon?: 'cart';
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  size,
  centered,
  colorScheme,
  onClick,
  icon,
  disabled = false,
  loading = false,
}) => {
  return (
    <BtnAntd
      onClick={onClick}
      disabled={disabled || loading}
      className={classNames(
        className,
        'text-md btn',
        `btn-${size}`,
        `btn-${colorScheme}`,
        {
          centered: centered,
        },
      )}>
      {icon === 'cart' ? <Cart /> : ''}
      {loading ? <img className="btn__spinner" src={SpinnerImg} /> : ''}
      {children}
    </BtnAntd>
  );
};

export default Button;

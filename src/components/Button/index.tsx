import React from 'react';
import { Button as BtnAntd } from 'antd';
import classNames from 'classnames';

interface ButtonProps {
  size?: 'lg' | 'sm';
  centered?: boolean;
  colorScheme?: 'black';
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  size,
  centered,
  colorScheme,
  onClick,
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
      {children}
    </BtnAntd>
  );
};

export default Button;

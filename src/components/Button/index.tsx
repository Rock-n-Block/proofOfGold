import React from 'react';
import { Button as BtnAntd } from 'antd';
import classNames from 'classnames';

interface ButtonProps {
  type?: 'lg' | 'sm';
  centered?: boolean;
  colorScheme?: "black";
}

const Button: React.FC<React.HTMLAttributes<HTMLDivElement> & ButtonProps> = ({
  children,
  className,
  type,
  centered,
  colorScheme
}) => {
  return (
    <BtnAntd
      className={classNames(className, 'text-md btn', `btn-${type}`, `btn-${colorScheme}`, {
        centered: centered,
      })}>
      {children}
    </BtnAntd>
  );
};

export default Button;

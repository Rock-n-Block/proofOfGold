import React from 'react';
import { Button as BtnAntd } from 'antd';
import classNames from 'classnames';

interface ButtonProps {
  type?: 'lg';
  colorScheme?: 'black';
}

const Button: React.FC<React.HTMLAttributes<HTMLDivElement> & ButtonProps> = ({
  children,
  className,
  type,
  colorScheme
}) => {
  return (
    <BtnAntd className={classNames(className, 'text-md btn', `btn-${type}`, `btn-${colorScheme}`)}>
      {children}
    </BtnAntd>
  );
};

export default Button;

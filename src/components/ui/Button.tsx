import React from 'react';

type TButtonSize = 'small' | 'medium' | 'large';
type TButtonVariant =
  | 'primary'
  | 'secondary'
  | 'dark'
  | 'danger'
  | 'link'
  | 'light'
  | 'info'
  | 'warning'
  | 'success';

type TProps = {
  variant?: TButtonVariant;
  size?: TButtonSize;
  outline?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const BUTTON_SIZE = {
  medium: 'md',
  large: 'lg',
  small: 'sm',
};

const Button: React.FC<TProps> = ({
  variant,
  size,
  outline,
  disabled,
  children,
  onClick,
}) => {
  const buttonSize = `btn-${size ? BUTTON_SIZE[size] : BUTTON_SIZE.medium}`;
  const buttonType = `btn${outline ? '-outline-' : '-'}${variant || 'primary'}`;

  return (
    <button
      className={`btn ${buttonSize} ${buttonType}`}
      disabled={disabled || false}
      onClick={onClick || undefined}
    >
      {children}
    </button>
  );
};

export default Button;

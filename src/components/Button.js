import React from 'react';
import './styles/Button.css';
export default function Button({
  onClick,
  type,
  icon,
  children,
  block,
  ...restProps
}) {
  return (
    <button
      {...restProps}
      onClick={onClick}
      className={`btn ${
        type === 'secondary' ? 'btn--secondary' : 'btn--primary'
      } ${icon ? 'btn--icon' : ''} ${block ? 'btn--block' : ''}`}>
      {children}
    </button>
  );
}

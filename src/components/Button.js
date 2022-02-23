import React from 'react';
import './styles/Button.css';
export default function Button({ onClick, type, icon, children }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${
        type === 'secondary' ? 'btn--secondary' : 'btn--primary'
      } ${icon ? 'btn--icon' : ''}`}>
      {children}
    </button>
  );
}

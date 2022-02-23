import React from 'react';
import './styles/Badge.css';
export default function Badge({ text, type }) {
  return (
    <small
      className={`badge ${type === 'size' ? 'badge--size' : 'badge--carrier'}`}>
      {text}
    </small>
  );
}

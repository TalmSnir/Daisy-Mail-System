import React from 'react';
import Badge from './Badge';

import './styles/Package.css';

export default function Package({ id, type, carrier, recipient }) {
  return (
    <div className='package'>
      <div className='recipient-info'>
        <h2>{recipient.name}</h2>
        <h3>{recipient.email}</h3>
      </div>
      <div className='badges'>
        <Badge type={'carrier'} text={carrier} />
        <Badge type={'size'} text={type} />
      </div>
    </div>
  );
}

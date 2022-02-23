import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { notifyUserSingle } from '../reducers/packagesReducer';
import Badge from './Badge';
import Button from './Button';

import './styles/UserSinglePackage.css';

export default function UserSinglePackage({
  id,
  email,
  type,
  carrier,
  recipient,
}) {
  const [notified, setNotified] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className='user-single-package'>
      <div className='user-single-package_recipient-info'>
        <h2>{recipient.name}</h2>
        <h3>{recipient.email}</h3>
      </div>
      <div className='badges'>
        <Badge type={'carrier'} text={carrier} />
        <Badge type={'size'} text={type} />
      </div>
      <Button
        onClick={() => {
          dispatch(
            notifyUserSingle({
              email: recipient.email,
              type,
              carrier,
              name: recipient.name,
            })
          );
          setNotified(true);
          setTimeout(() => {
            setNotified(false);
          }, 1500);
        }}>
        {notified ? 'notified ✓' : 'notify'}
      </Button>
    </div>
  );
}

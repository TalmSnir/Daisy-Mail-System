import React, { useEffect, useState } from 'react';
import './styles/User.css';
import Button from './Button';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { notifyUserAll } from '../reducers/packagesReducer';

export default function User({ name, email, total }) {
  const [userPackages, setUserPackages] = useState([]);
  const [notified, setNotified] = useState(false);
  const packages = useSelector(state => state.packages.allPackages);
  const dispatch = useDispatch();
  useEffect(() => {
    setUserPackages(packages.filter(pack => pack.recipient.name === name));
  }, []);

  return (
    <div className='user'>
      <div className='user_packages_title'>
        <span className='user_title_name'>{name}</span>
        <span className='user_title_num'>{`${total} packages`}</span>
      </div>
      <div className='users_actions'>
        <Button
          onClick={() => {
            dispatch(
              notifyUserAll({
                name,
                email,
                userPackagesNum: userPackages.length,
              })
            );
            setNotified(true);
            setTimeout(() => {
              setNotified(false);
            }, 1500);
          }}>
          {notified ? 'notified ✓' : 'notify all'}
        </Button>
        <NavLink
          to={`/packages-by-user/${name}`}
          className='btn btn--icon btn--secondary'>
          see details{' '}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'>
            <path
              fillRule='evenodd'
              d='M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z'
            />
          </svg>
        </NavLink>
      </div>
    </div>
  );
}

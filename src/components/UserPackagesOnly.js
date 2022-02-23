import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import UserSinglePackage from './UserSinglePackage';
import './styles/UserPackagesOnly.css';
export default function UserPackagesOnly() {
  const [userPackages, setUserPackages] = useState([]);
  const name = useLocation().pathname.split('/').pop().replace('%20', ' ');
  const dispatch = useDispatch();
  const packages = useSelector(state => state.packages.allPackages);
  useEffect(() => {
    packages &&
      setUserPackages(packages.filter(pack => pack.recipient.name === name));
  }, [packages]);
  return (
    <div className='packages'>
      <div className='packages_title'>
        <NavLink to='/packages-by-user' className='link link--icon'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'>
            <path
              fillRule='evenodd'
              d='M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z'
            />
          </svg>
          back to packages by recipients
        </NavLink>
        <h1 className='only-user_title'>{`${name} packages`}</h1>
        <span className='packages_total'>
          total: {`${userPackages.length}`}
        </span>
      </div>
      {userPackages?.map(box => (
        <UserSinglePackage
          key={box.id}
          type={box.type}
          carrier={box.carrier}
          recipient={box.recipient}
        />
      ))}
    </div>
  );
}

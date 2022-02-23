import React, { useEffect, useState } from 'react';
import User from './User';
import './styles/UserPackages.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterPackagesByUsers } from '../reducers/packagesReducer';
export default function UserPackages() {
  const packages = useSelector(state => state.packages.allPackages);
  const packagesByUsers = useSelector(state => state.packages.packagesByUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    packages && dispatch(filterPackagesByUsers());
  }, [packages]);

  return (
    <section className='users'>
      <div className='users_title'>
        <NavLink to='/' className='link link--icon'>
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
          back to main
        </NavLink>
        <h1>packages by recipients</h1>
        <span className='users_total'>total: {`${packages?.length}`}</span>
      </div>
      {packagesByUsers &&
        packagesByUsers.length > 0 &&
        packagesByUsers.map((rec, id) => {
          const userPackages = packages.filter(
            pack => pack.recipient.name === rec
          );
          return (
            <User
              key={id}
              packages={[...userPackages]}
              name={rec}
              total={userPackages.length}
              email={userPackages[0].recipient.email}
            />
          );
        })}
    </section>
  );
}

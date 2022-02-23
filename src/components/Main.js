import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles/Button.css';
import './styles/Main.css';
export default function Main() {
  return (
    <main className='main'>
      <section>
        <h1>Welcome to the Package Tracker</h1>
        <div className='links'>
          <NavLink to='all-packages' className='btn btn--primary'>
            all packages
          </NavLink>
          <NavLink to='packages-by-user' className='btn btn--secondary'>
            packages by recipient
          </NavLink>
        </div>
      </section>
    </main>
  );
}

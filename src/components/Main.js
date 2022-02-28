import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import { Dialog } from '@headlessui/react';
import './styles/Button.css';
import './styles/Main.css';
import AddPackageModal from './AddPackageModal';
export default function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

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
        <Button block icon onClick={handleOpenModal}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='currentColor'
            viewBox='0 0 16 16'>
            <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
          </svg>
          add new package
        </Button>
      </section>
      <AddPackageModal isOpen={isOpen} onClose={handleCloseModal} />
    </main>
  );
}

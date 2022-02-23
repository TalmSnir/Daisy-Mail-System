import React from 'react';
import Logo from '../assets/logo.png';
import './styles/Header.css';
export default function Header() {
  return (
    <header>
      <img src={Logo} alt='company-logo' />
    </header>
  );
}

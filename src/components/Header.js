import React from 'react';
import ThemeToggle from './ThemeToggle';
import '../styles/Header.css';
import '../styles/theme-variables.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">
          <h1>RL Performance Calculator</h1>
          <h2>Calculez vos performances</h2>
        </div>
        <div className="header-toggle">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;
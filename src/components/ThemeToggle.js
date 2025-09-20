// ThemeToggle.js
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeContext';
import '../styles/ThemeToggle.css';

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Passer en mode clair' : 'Passer en mode sombre'}
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

export default ThemeToggle;
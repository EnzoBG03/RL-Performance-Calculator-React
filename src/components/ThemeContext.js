// ThemeContext.js
import React, { useState, useContext, createContext } from 'react';

// Contexte pour le thème
const ThemeContext = createContext();

// Provider du thème
export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className={isDarkMode ? 'app dark-theme' : 'app light-theme'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

// Hook personnalisé pour utiliser le thème
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
import React from 'react';
import Home from './Home';
import '../styles/App.css';
import '../styles/theme-variables.css';
import { ThemeProvider } from './ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}
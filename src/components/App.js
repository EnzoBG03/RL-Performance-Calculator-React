/*import '../styles/App.css';
import Home from './Home';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;*/
import Home from './Home';
import '../styles/App.css';
import '../styles/theme-variables.css';
import { ThemeProvider } from './ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <Home />
      <style jsx>{`
        .app {
          min-height: 100vh;
          transition: all 0.3s ease;
        }

        /* Variables CSS pour les thèmes */
        .light-theme {
          --bg-primary: #ffffff;
          --bg-secondary: #f5f5f5;
          --bg-header-footer: #282c34;
          --text-primary: #000000;
          --text-secondary: #333333;
          --text-light: #ffffff;
          --border-color: #ccc;
          --shadow-color: rgba(0, 0, 0, 0.1);
          --button-primary: #34a853;
          --button-primary-hover: #2d8f49;
          --button-secondary: #234399;
          --button-secondary-hover: #1565c0;
          --error-color: #dc3545;
          --card-bg: #ffffff;
          --input-bg: #ffffff;
          --results-bg-alt: #f0f0f0;
          --results-bg-alt2: #e8e8e8;
        }

        .dark-theme {
          --bg-primary: #121212;
          --bg-secondary: #1e1e1e;
          --bg-header-footer: #1a1a1a;
          --text-primary: #ffffff;
          --text-secondary: #e0e0e0;
          --text-light: #ffffff;
          --border-color: #404040;
          --shadow-color: rgba(0, 0, 0, 0.3);
          --button-primary: #34a853;
          --button-primary-hover: #2d8f49;
          --button-secondary: #5a7bc8;
          --button-secondary-hover: #4a6ba8;
          --error-color: #ff6b6b;
          --card-bg: #2a2a2a;
          --input-bg: #333333;
          --results-bg-alt: #333333;
          --results-bg-alt2: #404040;
        }

        /* Styles généraux */
        .app {
          background-color: var(--bg-primary);
          color: var(--text-primary);
        }

        /* Header */
        .header {
          background-color: var(--bg-header-footer);
          color: var(--text-light);
          padding: 20px;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .header h1 {
          margin: 0;
          font-size: 2.5em;
        }

        .header h2 {
          margin: 10px 0 0;
          font-size: 1.2em;
          font-weight: normal;
        }

        /* Theme Toggle */
        .theme-toggle {
          background: none;
          border: 2px solid var(--text-light);
          color: var(--text-light);
          border-radius: 50%;
          width: 50px;
          height: 50px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .theme-toggle:hover {
          background-color: var(--text-light);
          color: var(--bg-header-footer);
        }

        /* Footer */
        .footer {
          background-color: var(--bg-header-footer);
          color: var(--text-light);
          text-align: center;
          padding: 10px;
          margin-top: auto;
        }

        /* Home */
        .home {
          text-align: center;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        /* Description */
        .description {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          line-height: 1.6;
          flex: 1;
        }

        .description h2 {
          color: var(--text-primary);
        }

        .description p {
          margin-bottom: 15px;
          color: var(--text-secondary);
        }

        /* Buttons */
        .start, .player-input-form button {
          display: block;
          width: 200px;
          margin: 20px auto;
          padding: 10px 20px;
          font-size: 1.2em;
          color: var(--text-light);
          background-color: var(--button-primary);
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .start:hover, .player-input-form button:hover {
          background-color: var(--button-primary-hover);
        }

        .finish-button {
  padding: 12px 20px;
  font-size: 1.1em;
  color: var(--text-light);
  background-color: var(--button-primary);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.finish-button:hover:not(:disabled) {
  background-color: var(--button-primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(52, 168, 83, 0.3);
}

.finish-button:disabled {
  background-color: var(--border-color);
  cursor: not-allowed;
  opacity: 0.6;
}

        .return-button {
  padding: 10px 20px;
  font-size: 1em;
  color: var(--text-light);
  background-color: var(--button-secondary);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.return-button:hover {
  background-color: var(--button-secondary-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(35, 67, 153, 0.3);
}

        .button-container {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        /* Game Container */
        .game-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px var(--shadow-color);
          color: var(--text-primary);
        }

        .game-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

.form-section {
  background-color: var(--card-bg);
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 8px var(--shadow-color);
}

.info-section {
  background-color: var(--card-bg);
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 8px var(--shadow-color);
}

.game-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

        /* Player Input Form */
        .player-input-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
          max-width: 400px;
          margin: 0 auto;
        }

        .player-input-form input {
          padding: 10px;
          border: 1px solid var(--border-color);
          border-radius: 4px;
          font-size: 1em;
          background-color: var(--input-bg);
          color: var(--text-primary);
        }

        .player-input-form input::placeholder {
          color: var(--text-secondary);
        }

        .player-input-form input[type="number"] {
          width: 200px;
        }

        .player-count {
  text-align: center;
  padding: 20px;
  background-color: var(--results-bg-alt);
  border-radius: 8px;
}

.player-count h3 {
  margin: 0 0 10px 0;
  color: var(--text-primary);
  font-size: 1.2em;
}

.count-number {
  font-size: 2.5em;
  font-weight: bold;
  color: var(--button-primary);
}

.players-list {
  background-color: var(--results-bg-alt);
  padding: 15px;
  border-radius: 8px;
}

.players-list h4 {
  margin: 0 0 10px 0;
  color: var(--text-primary);
  font-size: 1.1em;
}

.players-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.players-list li {
  padding: 8px 12px;
  margin: 5px 0;
  background-color: var(--input-bg);
  border-radius: 4px;
  border-left: 4px solid var(--button-primary);
  color: var(--text-primary);
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

        /* Results */
        .results-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: var(--card-bg);
          border-radius: 8px;
          box-shadow: 0 2px 4px var(--shadow-color);
        }

        .results-container h2 {
          color: var(--text-primary);
          text-align: center;
          margin-bottom: 20px;
        }

        .results-container p {
          margin-bottom: 10px;
          padding: 10px;
          background-color: var(--results-bg-alt);
          border-radius: 4px;
          color: var(--text-primary);
        }

        .results-container p:nth-child(even) {
          background-color: var(--results-bg-alt2);
        }

        /* Error Message */
        .error-message {
  color: var(--error-color);
  font-weight: bold;
  text-align: center;
  padding: 10px;
  background-color: rgba(220, 53, 69, 0.1);
  border-radius: 6px;
  border: 1px solid var(--error-color);
}

        /* Responsive */
        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            gap: 15px;
          }

          .header h1 {
            font-size: 2em;
          }

          .description {
            padding: 15px;
          }

          .game-container, .results-container {
            margin: 10px;
            padding: 15px;
          }

          .game-layout {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .form-section,
  .info-section {
    padding: 20px;
  }
  
  .count-number {
    font-size: 2em;
  }
        }

@media (max-width: 480px) {
  .action-buttons {
    gap: 10px;
  }
  
  .finish-button,
  .return-button {
    padding: 10px 15px;
    font-size: 0.9em;
  }
}
      `}</style>
    </ThemeProvider>
  );
}
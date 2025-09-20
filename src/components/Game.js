/*import React, { useState } from 'react';
import PlayerInput from './PlayerInput';
import Results from './Results';
import '../styles/Game.css';
import '../styles/theme-variables.css';

const CADRE = 10;
const TOUCHE = 2;
const ARRET = 50;
const PASSE_DECISIVE = 50;
const BONUS_SAUVE_MIRACLE = 25;
const BUT = 100;

function Game({ onReturn, onClose }) {
    const [players, setPlayers] = useState({});
    const [gameStage, setGameStage] = useState('input');
    const [error, setError] = useState('');

    const addPlayer = (playerName, stats) => {
        setPlayers(prevPlayers => {
            const updatedPlayers = { ...prevPlayers };
            if (updatedPlayers[playerName]) {
                // Mise à jour des stats du joueur existant
                for (let key in stats) {
                    updatedPlayers[playerName][key] += stats[key];
                }
            } else {
                // Ajout d'un nouveau joueur
                updatedPlayers[playerName] = stats;
            }
            return updatedPlayers;
        });
        setError('');
    };

    const calculateScore = (stats) => {
        return (TOUCHE * stats.nbTouche) + (CADRE * stats.nbCadre) + stats.scoreArrets +
               (PASSE_DECISIVE * stats.nbDecisive) + (BUT * stats.nbBut);
    };

    const handlePlayerSubmit = (playerName, stats) => {
        const scoreArrets = (stats.nbArret * ARRET) + (stats.nbMiracle * BONUS_SAUVE_MIRACLE);
        const scoreTotal = calculateScore({ ...stats, scoreArrets });
        addPlayer(playerName, { ...stats, scoreArrets, scoreTotal });
    };

    const finishGame = () => {
        if (Object.keys(players).length % 2 !== 0) {
            setError('Le nombre de joueurs doit être pair pour terminer la saisie.');
        } else {
            setGameStage('results');
        }
    };

    if (gameStage === 'input') {
        return (
            <div className="game-container">
                <PlayerInput onSubmit={handlePlayerSubmit} />
                {error && <p className="error-message">{error}</p>}
                <button className="finish-button" onClick={finishGame}>Terminer la saisie</button>
                <p>Nombre de joueurs : {Object.keys(players).length}</p>
                <div className="button-container">
                    <button className="return-button" onClick={onReturn}>Retour à l'accueil</button>
                </div>
            </div>
        );
    } else {
        return <Results players={players} onReturn={onReturn} onClose={onClose} />;
    }
}

export default Game;*/
// Game.js (nouveau layout)
import React, { useState } from 'react';
import PlayerInput from './PlayerInput';
import Results from './Results';
import '../styles/Game.css';

const CADRE = 10;
const TOUCHE = 2;
const ARRET = 50;
const PASSE_DECISIVE = 50;
const BONUS_SAUVE_MIRACLE = 25;
const BUT = 100;

function Game({ onReturn, onClose }) {
    const [players, setPlayers] = useState({});
    const [gameStage, setGameStage] = useState('input');
    const [error, setError] = useState('');

    const addPlayer = (playerName, stats) => {
        setPlayers(prevPlayers => {
            const updatedPlayers = { ...prevPlayers };
            if (updatedPlayers[playerName]) {
                // Mise à jour des stats du joueur existant
                for (let key in stats) {
                    updatedPlayers[playerName][key] += stats[key];
                }
            } else {
                // Ajout d'un nouveau joueur
                updatedPlayers[playerName] = stats;
            }
            return updatedPlayers;
        });
        setError('');
    };

    const calculateScore = (stats) => {
        return (TOUCHE * stats.nbTouche) + (CADRE * stats.nbCadre) + stats.scoreArrets +
               (PASSE_DECISIVE * stats.nbDecisive) + (BUT * stats.nbBut);
    };

    const handlePlayerSubmit = (playerName, stats) => {
        const scoreArrets = (stats.nbArret * ARRET) + (stats.nbMiracle * BONUS_SAUVE_MIRACLE);
        const scoreTotal = calculateScore({ ...stats, scoreArrets });
        addPlayer(playerName, { ...stats, scoreArrets, scoreTotal });
    };

    const finishGame = () => {
        if (Object.keys(players).length % 2 !== 0) {
            setError('Le nombre de joueurs doit être pair pour terminer la saisie.');
        } else {
            setGameStage('results');
        }
    };

    if (gameStage === 'input') {
        return (
            <div className="game-container">
                <div className="game-layout">
                    <div className="form-section">
                        <PlayerInput onSubmit={handlePlayerSubmit} />
                    </div>
                    
                    <div className="info-section">
                        <div className="game-info">
                            <div className="player-count">
                                <h3>Joueurs ajoutés</h3>
                                <span className="count-number">{Object.keys(players).length}</span>
                            </div>
                            
                            {Object.keys(players).length > 0 && (
                                <div className="players-list">
                                    <h4>Liste des joueurs :</h4>
                                    <ul>
                                        {Object.keys(players).map((playerName, index) => (
                                            <li key={index}>{playerName}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            
                            {error && <p className="error-message">{error}</p>}
                            
                            <div className="action-buttons">
                                <button 
                                    className="finish-button" 
                                    onClick={finishGame}
                                    disabled={Object.keys(players).length === 0}
                                >
                                    Terminer la saisie
                                </button>
                                
                                <button className="return-button" onClick={onReturn}>
                                    Retour à l'accueil
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <Results players={players} onReturn={onReturn} onClose={onClose} />;
    }
}

export default Game;
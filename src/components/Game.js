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
                for (let key in stats) {
                    updatedPlayers[playerName][key] += stats[key];
                }
            } else {
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
        <div className="game-wrapper">
            <div className="game-grid">
                <div className="game-card">
                    <h3 className="section-title">Nouveau Joueur</h3>
                    <PlayerInput onSubmit={handlePlayerSubmit} />
                </div>
                
                <div className="game-card">
                    <div className="counter-badge">
                        <span className="counter-label">Joueurs inscrits</span>
                        <span className="counter-val">{Object.keys(players).length}</span>
                    </div>
                    
                    {Object.keys(players).length > 0 && (
                        <div className="roster-box">
                            <h4 className="roster-title">Feuille de match</h4>
                            <ul className="roster-list">
                                {Object.keys(players).map((playerName, index) => (
                                    <li key={index} className="roster-item">
                                        <span className="roster-name">{playerName}</span>
                                        <span className="roster-pts">{players[playerName].scoreTotal} pts</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    
                    {error && <p className="error-alert">{error}</p>}
                    
                    <div className="action-group">
                        <button 
                            className="btn-finish"
                            onClick={finishGame}
                            disabled={Object.keys(players).length === 0}
                        >
                            Terminer la saisie
                        </button>
                        
                        <button className="btn-return" onClick={onReturn}>
                            Retour à l'accueil
                        </button>
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
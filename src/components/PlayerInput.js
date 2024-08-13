import React, { useState } from 'react';
import '../styles/PlayerInput.css';

function PlayerInput({ onSubmit }) {
    const [playerName, setPlayerName] = useState('');
    const [stats, setStats] = useState({
        nbTouche: 0,
        nbCadre: 0,
        nbArret: 0,
        nbMiracle: 0,
        nbDecisive: 0,
        nbBut: 0
    });
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (stats.nbMiracle > stats.nbArret) {
            setError('Le nombre de sauvetages miraculeux ne peut pas être supérieur au nombre d\'arrêts.');
            return;
        }
        onSubmit(playerName, stats);
        setPlayerName('');
        setStats({
            nbTouche: 0,
            nbCadre: 0,
            nbArret: 0,
            nbMiracle: 0,
            nbDecisive: 0,
            nbBut: 0
        });
        setError('');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'playerName') {
            setPlayerName(value);
        } else {
            setStats(prevStats => {
                const newStats = { ...prevStats, [name]: parseInt(value) || 0 };
                if (name === 'nbArret' && newStats.nbMiracle > newStats.nbArret) {
                    newStats.nbMiracle = newStats.nbArret;
                }
                return newStats;
            });
        }
        setError('');
    };

    return (
        <form className="player-input-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="playerName"
                value={playerName}
                onChange={handleChange}
                placeholder="Nom du joueur"
                required
            />
            {Object.keys(stats).map(stat => (
                <input
                    key={stat}
                    type="number"
                    name={stat}
                    value={stats[stat]}
                    onChange={handleChange}
                    placeholder={stat}
                    min="0"
                    max={stat === 'nbMiracle' ? stats.nbArret : undefined}
                    required
                />
            ))}
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Ajouter joueur</button>
        </form>
    );
}

export default PlayerInput;
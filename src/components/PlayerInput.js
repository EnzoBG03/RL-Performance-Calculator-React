import React, { useState } from 'react';
import '../styles/PlayerInput.css';

function PlayerInput({ onSubmit }) {
    const [playerName, setPlayerName] = useState('');
    const [stats, setStats] = useState({
        nbTouche: null,
        nbCadre: null,
        nbArret: null,
        nbMiracle: null,
        nbDecisive: null,
        nbBut: null
    });
    const [error, setError] = useState('');

    const statLabels = {
        nbTouche: 'Ballons touchés',
        nbCadre: 'Tirs cadrés',
        nbArret: 'Arrêts',
        nbMiracle: 'Sauvetages miraculeux',
        nbDecisive: 'Passes décisives',
        nbBut: 'Buts'
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Convertir les valeurs vides en 0 pour la soumission
        const processedStats = Object.keys(stats).reduce((acc, key) => {
            acc[key] = stats[key] ?? 0;
            return acc;
        }, {});

        if (processedStats.nbMiracle > processedStats.nbArret) {
            setError('Le nombre de sauvetages miraculeux ne peut pas être supérieur au nombre d\'arrêts.');
            return;
        }

        onSubmit(playerName, processedStats);
        setPlayerName('');
        setStats({
            nbTouche: null,
            nbCadre: null,
            nbArret: null,
            nbMiracle: null,
            nbDecisive: null,
            nbBut: null
        });
        setError('');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'playerName') {
            setPlayerName(value);
        } else {
            setStats(prevStats => {
                const newValue = value === '' ? null : parseInt(value) || 0;
                const newStats = { ...prevStats, [name]: newValue };
                
                // Vérifier et ajuster nbMiracle si nécessaire
                if (name === 'nbArret' && newStats.nbMiracle !== null && parseInt(newStats.nbMiracle) > parseInt(value)) {
                    newStats.nbMiracle = value;
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
                    value={stats[stat] ?? ''}
                    onChange={handleChange}
                    placeholder={statLabels[stat]}
                    min="0"
                    max={stat === 'nbMiracle' && stats.nbArret !== null ? parseInt(stats.nbArret) : undefined}
                    required
                />
            ))}
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Ajouter joueur</button>
        </form>
    );
}

export default PlayerInput;
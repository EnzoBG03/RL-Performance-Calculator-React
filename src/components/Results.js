import React from 'react';
import '../styles/Results.css';
import '../styles/theme-variables.css';

function Results({ players, onReturn, onClose }) {
    const getBestPlayer = (critereFn) => {
        return Object.entries(players).reduce((best, [name, stats]) => 
            critereFn(stats) > critereFn(best[1]) ? [name, stats] : best
        );
    };

    const bestOverall = getBestPlayer(stats => stats.scoreTotal);
    const bestScorer = getBestPlayer(stats => stats.nbBut);
    const bestAssist = getBestPlayer(stats => stats.nbDecisive);
    const bestGoalkeeper = getBestPlayer(stats => stats.nbArret);

    // Classement des joueurs par points
    const sortedPlayers = Object.entries(players).sort((a, b) => b[1].scoreTotal - a[1].scoreTotal);

    return (
        <div className="results-page">
            <h2 className="results-title">Résultats de la partie</h2>
            
            <div className="results-grid">
                {/* Encart des meilleurs joueurs */}
                <div className="results-card best-players-card">
                    <h3>Meilleurs joueurs</h3>
                    <div className="best-player-item">
                        <span className="label">Meilleur joueur :</span>
                        <span className="value">{bestOverall[0]} ({bestOverall[1].scoreTotal} {bestOverall[1].scoreTotal > 1 ? 'pts' : 'pt'})</span>
                    </div>
                    <div className="best-player-item">
                        <span className="label">Meilleur buteur :</span>
                        <span className="value">{bestScorer[0]} ({bestScorer[1].nbBut} {bestScorer[1].nbBut > 1 ? 'buts' : 'but'})</span>
                    </div>
                    <div className="best-player-item">
                        <span className="label">Meilleur passeur :</span>
                        <span className="value">{bestAssist[0]} ({bestAssist[1].nbDecisive} {bestAssist[1].nbDecisive > 1 ? 'passes' : 'passe'})</span>
                    </div>
                    <div className="best-player-item">
                        <span className="label">Meilleur gardien :</span>
                        <span className="value">{bestGoalkeeper[0]} ({bestGoalkeeper[1].nbArret} {bestGoalkeeper[1].nbArret > 1 ? 'arrêts' : 'arrêt'})</span>
                    </div>
                </div>

                {/* Encart du classement complet */}
                <div className="results-card ranking-card">
                    <h3>Classement général</h3>
                    <div className="ranking-list">
                        {sortedPlayers.map(([name, stats], index) => (
                            <div key={name} className={`ranking-item ${index === 0 ? 'first-place' : ''}`}>
                                <span className="rank">#{index + 1}</span>
                                <span className="player-name">{name}</span>
                                <div className="player-stats">
                                    <span className="stat">{stats.nbBut}B</span>
                                    <span className="stat">{stats.nbDecisive}P</span>
                                    <span className="stat">{stats.nbArret}A</span>
                                </div>
                                <span className="total-score">{stats.scoreTotal} pts</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Encart du barème */}
                <div className="results-card scoring-card">
                    <h3>Barème des points</h3>
                    <div className="scoring-table">
                        <div className="scoring-row">
                            <span className="scoring-label">Touche de balle</span>
                            <span className="scoring-value">2 points</span>
                        </div>
                        <div className="scoring-row">
                            <span className="scoring-label">Tir cadré</span>
                            <span className="scoring-value">10 points</span>
                        </div>
                        <div className="scoring-row">
                            <span className="scoring-label">Arrêt</span>
                            <span className="scoring-value">50 points</span>
                        </div>
                        <div className="scoring-row">
                            <span className="scoring-label">Sauvetage miraculeux</span>
                            <span className="scoring-value">Arrêt+25 points</span>
                        </div>
                        <div className="scoring-row">
                            <span className="scoring-label">Passe décisive</span>
                            <span className="scoring-value">50 points</span>
                        </div>
                        <div className="scoring-row">
                            <span className="scoring-label">But</span>
                            <span className="scoring-value">100 points</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="button-container">
                <button className="return-button" onClick={onReturn}>Retour à l'accueil</button>
            </div>

        </div>
    );
}

export default Results;
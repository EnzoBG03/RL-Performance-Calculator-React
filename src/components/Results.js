import React from 'react';
import '../styles/Results.css';

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

    return (
        <div className="results-container">
            <h2>Résultats</h2>
            <p>Le meilleur joueur est : {bestOverall[0]} avec un score de {bestOverall[1].scoreTotal}</p>
            <p>Le meilleur buteur est : {bestScorer[0]} avec {bestScorer[1].nbBut} buts</p>
            <p>Le meilleur passeur est : {bestAssist[0]} avec {bestAssist[1].nbDecisive} passes décisives</p>
            <p>Le meilleur gardien est : {bestGoalkeeper[0]} avec {bestGoalkeeper[1].nbArret} arrêts</p>
            <div className="button-container">
                <button className="return-button" onClick={onReturn}>Retour à l'accueil</button>
            </div>
        </div>
    );
}

export default Results;
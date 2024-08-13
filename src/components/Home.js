import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Description from './Description';
import Start from './Start';
import Game from './Game';

function Home() {
    const [gameState, setGameState] = useState('home');

    const startGame = () => {
        setGameState('game');
    };

    const returnHome = () => {
        setGameState('home');
    };

    const closeApp = () => {
        // Cette fonction ne peut pas réellement fermer l'application web,
        // mais nous pouvons simuler cela en affichant un message
        alert("L'application va se fermer. Dans une vraie application mobile, ceci fermerait l'app.");
    };

    return (
        <div className="home">
            <Header />
            {gameState === 'home' ? (
                <>
                    <Description />
                    <Start onStart={startGame} />
                </>
            ) : (
                <Game onReturn={returnHome} onClose={closeApp} />
            )}
            <Footer />
        </div>
    );
}

export default Home;
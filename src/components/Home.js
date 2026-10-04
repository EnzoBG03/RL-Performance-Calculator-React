import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Description from './Description';
import Start from './Start';
import Game from './Game';
import '../styles/Home.css';
import '../styles/theme-variables.css';

function Home() {
    const [gameState, setGameState] = useState('home');

    const startGame = () => {
        setGameState('game');
    };

    const returnHome = () => {
        setGameState('home');
    };

    const closeApp = () => {
        alert("L'application va se fermer.");
    };

    return (
        <div className="home">
            <Header />
            <main className="main-content">
                {gameState === 'home' ? (
                    <div className="home-screen">
                        <Description />
                        <Start onStart={startGame} />
                    </div>
                ) : (
                    <Game onReturn={returnHome} onClose={closeApp} />
                )}
            </main>
            <Footer />
        </div>
    );
}

export default Home;
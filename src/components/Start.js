import '../styles/Start.css';

function Start({ onStart }) {
    return (
        <button className="start" onClick={onStart}>Démarrer</button>
    );
}

export default Start;
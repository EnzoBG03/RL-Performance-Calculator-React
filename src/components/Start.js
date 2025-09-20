import '../styles/Start.css';
import '../styles/theme-variables.css';

function Start({ onStart }) {
    return (
        <button className="start" onClick={onStart}>Démarrer</button>
    );
}

export default Start;
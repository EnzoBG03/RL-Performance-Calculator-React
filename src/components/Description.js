import '../styles/Description.css';
import '../styles/theme-variables.css';

function Description() {
    return (
        <div className="description">
            <h2>Bienvenue sur RL Performance Calculator !</h2>
            <p>Ce site vous permet d'analyser les performances des joueurs de Rocket League en détail.</p>

            <p>Vous allez pouvoir saisir les statistiques des joueurs, incluant les touches de balle, les tirs cadrés, les arrêts et sauvetages miraculeux, les passes décisives et les buts marqués.</p>

            <p>RL Performance Calculator calculera automatiquement les scores et déterminera le meilleur joueur global (l'homme du match), le meilleur buteur, le meilleur passeur et le meilleur gardien.</p>

            <p>Cliquez sur le bouton ci-dessous pour démarrer</p>
        </div>
    );
}

export default Description;

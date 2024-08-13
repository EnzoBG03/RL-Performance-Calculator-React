import '../styles/Description.css';

function Description() {
    return (
        <div className="description">
            <h2>Bienvenue sur RL Performance Tracker !</h2>
            <p>Cette application vous permet d'analyser les performances des joueurs de Rocket League en détail.</p>

            <p>Vous allez pouvoir saisir les statistiques des joueurs, incluant les touches de balle, les tirs cadrés, les arrêts et sauvetages miraculeux, les passes décisives et les buts marqués.</p>

            <p>RL Performance Tracker calculera automatiquement les scores et déterminera le meilleur joueur global (l'homme du match), le meilleur buteur, le meilleur passeur et le meilleur gardien.</p>

            <p>Préparez-vous à entrer dans l'univers des statistiques de Rocket League !</p>
        </div>
    );
}

export default Description;
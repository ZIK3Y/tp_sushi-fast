import { Link } from 'react-router-dom';

/*
 * Composant Header
 * ----------------
 * Barre de navigation principale de l'application SushiFast.
 * Utilise Bootstrap pour la mise en forme et React Router pour la navigation.
 *
 * Fonctionnalités :
 * - Affiche le nom de l'application avec un lien vers l'accueil
 * - Menu responsive avec un bouton "hamburger" sur les petits écrans
 * - Liens de navigation vers toutes les pages principales :
 *     • Accueil
 *     • Nos saveurs
 *     • Avocat et Coriandre
 *     • California Saumon Avocat
 *     • Moins de 13 pièces
 *     • Plus cher et moins cher
 */
function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-danger">
                <div className="container-fluid">

                    {/* Logo et lien vers l'accueil */}
                    <Link to="/" className="navbar-brand text-white fs-3">
                        SushiFast
                    </Link>

                    {/* Bouton responsive pour les petits écrans */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll"
                        aria-controls="navbarScroll"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Menu de navigation */}
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav navbar-nav-scroll">

                            {/* Lien vers la page d'accueil */}
                            <li className="nav-item">
                                <Link to="/" className="nav-link text-white">
                                    Accueil
                                </Link>
                            </li>

                            {/* Lien vers la page "Nos saveurs" */}
                            <li className="nav-item">
                                <Link to="/saveur" className="nav-link text-white">
                                    Nos saveurs
                                </Link>
                            </li>

                            {/* Lien vers la page "Avocat et Coriandre" */}
                            <li className="nav-item">
                                <Link to="/avocat_coriandre" className="nav-link text-white">
                                    Avocat et Coriandre
                                </Link>
                            </li>

                            {/* Lien vers la page "California Saumon Avocat" */}
                            <li className="nav-item">
                                <Link to="/california_saumon_avocat" className="nav-link text-white">
                                    California Saumon Avocat
                                </Link>
                            </li>

                            {/* Lien vers la page "Moins de 13 pièces" */}
                            <li className="nav-item">
                                <Link to="/moins_de_treize" className="nav-link text-white">
                                    Moins de 13 pièces
                                </Link>
                            </li>

                            {/* Lien vers la page "Plus cher et moins cher" */}
                            <li className="nav-item">
                                <Link to="/plus_moins_cher" className="nav-link text-white">
                                    Plus cher et moins cher
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
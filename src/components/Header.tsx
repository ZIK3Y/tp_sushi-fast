import { Link } from 'react-router-dom';
import '../styles/HeaderStyle.css';

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
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">

                    {/* Logo et lien vers l'accueil */}
                    <Link to="/" className="navbar-brand text-white ms-4 d-flex align-items-center">
                        <img src="/assets/images/logo-sushifast.png" width={75} alt="Logo" />
                        <p className='fs-4 text-black mb-0 ms-2'>
                            <span className='fw-bold'>Sushi</span>Fast
                        </p>
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

                        <ul className="navbar-nav navbar-nav-scroll red-bg navbar-list p-3 rounded-pill ms-auto">

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

                            {/* Dropdown "Plus de choix" */}
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle text-white"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Plus de choix
                                </a>

                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to="/avocat_coriandre" className="dropdown-item text-black">
                                            Avocat et Coriandre
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/california_saumon_avocat" className="dropdown-item text-black">
                                            California Saumon Avocat
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/moins_de_treize" className="dropdown-item text-black">
                                            Moins de 13 pièces
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/plus_moins_cher" className="dropdown-item text-black">
                                            Plus cher et moins cher
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
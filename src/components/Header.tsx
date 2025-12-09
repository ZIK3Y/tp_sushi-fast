import { Link } from 'react-router-dom'

function Header() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-danger">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand text-white fs-3">SushiFast</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav navbar-nav-scroll">
                            <li className="nav-item">
                                <Link to="/" className="nav-link text-white">Accueil</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/saveur" className="nav-link text-white">Nos saveurs</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/avocat_coriandre" className="nav-link text-white">Avocat et Coriandre</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header

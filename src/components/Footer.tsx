import { Link } from "react-router-dom";

/*
 * Composant Footer
 * ----------------
 * Pied de page principal de l'application SushiFast.
 * Utilise Bootstrap pour la mise en page et les icônes.
 *
 * Sections principales :
 * 1. Liens de navigation vers les pages principales
 * 2. Icônes pour les réseaux sociaux
 * 3. Informations de contact
 * 4. Copyright et mentions légales
 */
function Footer() {
  return (
    <>
      <footer className="bg-dark text-white pt-5 pb-4">
        <div className="container">

          <div className="row">

            {/* Section Liens */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 text-md-start">
              <h5 className="text-uppercase mb-4 font-weight-bold">Liens</h5>
              <p><Link to="/" className="text-white text-decoration-none">Accueil</Link></p>
              <p><Link to="/saveur" className="text-white text-decoration-none">Nos saveurs</Link></p>
              <p><Link to="/avocat_coriandre" className="text-white text-decoration-none">Avocat et Coriandre</Link></p>
              <p><Link to="/california_saumon_avocat" className="text-white text-decoration-none">California Saumon Avocat</Link></p>
              <p><Link to="/moins_de_treize" className="text-white text-decoration-none">Moins de 13 pièces</Link></p>
              <p><Link to="/plus_moins_cher" className="text-white text-decoration-none">Plus cher et moins cher</Link></p>
            </div>

            {/* Section Réseaux sociaux */}
            <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mt-3 text-md-center">
              <h5 className="text-uppercase mb-4 font-weight-bold">Suivez-nous</h5>

              {/* Liens réseaux sociaux avec icônes SVG */}
              <Link to="#" className="text-white mx-3">
                {/* Facebook */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" height="30">
                  <path fill="#ffffff" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z" />
                </svg>
              </Link>
              <Link to="#" className="text-white mx-3">
                {/* Twitter */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="30" height="30">
                  <path fill="#ffffff" d="M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z" />
                </svg>
              </Link>
              <Link to="#" className="text-white mx-3">
                {/* Instagram */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="30" height="30">
                  <path fill="#ffffff" d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </Link>
            </div>

            {/* Section Contact */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 text-md-end">
              <h5 className="text-uppercase mb-4 font-weight-bold">Contact</h5>
              <p><i className="bi bi-house-door-fill me-2"></i>4 rue de la paix, Paris</p>
              <p><i className="bi bi-envelope-fill me-2"></i>contact@sushifast.com</p>
              <p><i className="bi bi-telephone-fill me-2"></i>+33 6 12 34 56 78</p>
            </div>

          </div>

          {/* Ligne de séparation */}
          <hr className="mb-4" />

          {/* Copyright */}
          <div className="row align-items-center text-md-start">
            <div className="col-md-7 col-lg-8">
              <p>&copy; 2025 SushiFast. Tous droits réservés.</p>
            </div>
            <div className="col-md-5 col-lg-4">
              {/* Espace pour contenu futur */}
            </div>
          </div>

        </div>
      </footer>

      {/* Chargement des icônes Bootstrap */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
    </>
  );
}

export default Footer;
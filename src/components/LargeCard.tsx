import { Menu, Aliment } from "../types/types";
import "../styles/LargeCardStyle.css";

/*
 * Composant LargeCard
 * -------------------
 * Composant réutilisable pour afficher un menu sous forme de grande carte.
 * Utilise Bootstrap pour la mise en page responsive et les styles de carte.
 *
 * Props attendues (Menu) :
 * - id       : identifiant unique du menu
 * - nom      : nom du menu
 * - pieces   : nombre de pièces dans le menu
 * - prix     : prix du menu
 * - image    : nom de l'image associée
 * - aliments : liste des aliments (objet {nom, quantite})
 * - saveurs  : liste des saveurs
 *
 * Affichage :
 * - Colonne gauche : nom + saveurs
 * - Colonne droite : image du menu
 */
function LargeCard(props: Menu) {
  return (
    <>
      <div className="bg-white p-3 rounded-4 h-100 flex-fill">
        {/* Grille Bootstrap pour disposition responsive */}
        <div className="row g-2 h-100">
          {/* Colonne gauche : nom et saveurs */}
          <div className="col-md-6 text-center text-md-start d-flex flex-column justify-content-between">
            <div>
              <h4 className="fw-bold">{props.nom}</h4>
              <p className="fs-6 text-secondary fst-italic">
                {props.saveurs
                  .map((saveur, index) => {
                    // Première lettre en majuscule seulement pour la première saveur
                    const formattedSaveur =
                      index === 0
                        ? saveur.charAt(0).toUpperCase() + saveur.slice(1)
                        : saveur;

                    // Gestion des séparateurs
                    if (index === props.saveurs.length - 1) {
                      // Dernière saveur : pas de séparateur après
                      return formattedSaveur;
                    } else if (index === props.saveurs.length - 2) {
                      // Avant-dernière saveur : ajouter " et "
                      return formattedSaveur + " et ";
                    } else {
                      // Autres saveurs : ajouter ", "
                      return formattedSaveur + ", ";
                    }
                  })
                  .join("")}
              </p>
            </div>
            <div className="text-center text-md-start">
              <p className="fs-5 mb-2">{props.pieces} pièces</p>
              <div className="d-flex flex-row align-items-center gap-3">
                {/* Bouton d'action */}
                <a href="#" className="btn btn-red">
                  Commander
                </a>
                <p className="card-text fw-bold fs-5 mb-0">{props.prix}€</p>
              </div>
            </div>
          </div>

          {/* Colonne droite : image */}
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src={`/assets/images/${props.image}.jpg`}
              alt={props.nom}
              className="img-fluid rounded"
              style={{
                maxWidth: "100%",
                maxHeight: "200px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LargeCard;

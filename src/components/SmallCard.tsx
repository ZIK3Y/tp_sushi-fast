import { Menu } from "../types/types";
import "../styles/SmallCardStyle.css";

/*
 * Composant SmallCard
 * -------------------
 * Composant réutilisable pour afficher un menu sous forme de petite carte.
 * Utilise Bootstrap pour la mise en page responsive et le style de carte.
 *
 * Props attendues (Menu) :
 * - id     : identifiant unique du menu
 * - nom    : nom du menu
 * - pieces : nombre de pièces dans le menu
 * - prix   : prix du menu
 * - image  : nom de l'image associée
 * - saveurs, aliments : non affichés dans cette carte
 *
 * Affichage :
 * - Image du menu en haut de la carte
 * - Nom du menu
 * - Nombre de pièces et prix côte à côte
 * - Bouton "Commander"
 */
function SmallCard(props: Menu) {
  return (
    <>
      <div className="bg-white p-3 rounded-4 h-100">
        {/* Version mobile : flex-column avec image en haut */}
        <div className="d-flex d-md-none flex-column h-100">
          {/* Image du menu en haut */}
          <div className="d-flex justify-content-center align-items-center mb-3">
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

          {/* Nom du menu */}
          <h5 className="card-title fs-4 fw-bold mb-2">
            {props.nom}
            <span className="fw-normal"> - {props.pieces} pièces</span>
          </h5>

          {/* Prix et bouton */}
          <div className="mt-auto">
            <p className="card-text fw-bold fs-5 mb-2">{props.prix}€</p>
            {/* Bouton d'action */}
            <a href="#" className="btn btn-red">
              Commander
            </a>
          </div>
        </div>

        {/* Version desktop : row avec colonnes */}
        <div className="row g-2 align-items-center h-100 d-none d-md-flex">
          {/* Nom du menu */}
          <h5 className="card-title fs-4 fw-bold">
            {props.nom}
            <span className="fw-normal"> - {props.pieces} pièces</span>
          </h5>
          <div className="col-md-6 text-center text-md-start d-flex flex-column justify-content-center">
            {/* Informations sur le menu : nombre de pièces et prix */}
            <p className="card-text fw-bold fs-5">{props.prix}€</p>
            {/* Bouton d'action */}
            <a href="#" className="btn btn-red">
              Commander
            </a>
          </div>
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

export default SmallCard;

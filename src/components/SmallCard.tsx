import { Menu } from "../types/types";

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
            <div className="card">

                {/* Image du menu */}
                <img
                    src={`/assets/images/${props.image}.jpg`}
                    className="card-img-top my-2"
                    alt="Image du menu"
                />

                {/* Corps de la carte */}
                <div className="card-body">

                    {/* Nom du menu */}
                    <h5 className="card-title fs-3 fw-bold">{props.nom}</h5>

                    {/* Informations sur le menu : nombre de pièces et prix */}
                    <div className="row mb-3">
                        <div className="col-6 fs-5">
                            <p className="card-text">{props.pieces} pièces</p>
                        </div>
                        <div className="col-6 fs-4">
                            <p className="card-text fw-bold text-end">{props.prix}€</p>
                        </div>
                    </div>

                    {/* Bouton d'action */}
                    <a href="#" className="btn btn-danger">
                        Commander
                    </a>

                </div>
            </div>
        </>
    );
}

export default SmallCard;
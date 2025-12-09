import { Menu, Aliment } from "../types/types";

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
            <div className="card p-3 shadow-sm flex-fill">

                {/* Grille Bootstrap pour disposition responsive */}
                <div className="row g-2 align-items-center h-100">

                    {/* Colonne gauche : nom et saveurs */}
                    <div className="col-md-6 text-center text-md-start d-flex flex-column justify-content-center">
                        <h3 className="fw-bold">{props.nom}</h3>
                        <ul className="list-unstyled mb-0">
                            {props.saveurs.map((saveur) => (
                                <li className="fs-5" key={saveur}>
                                    {saveur}
                                </li>
                            ))}
                        </ul>
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
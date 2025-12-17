import { useState, useEffect } from "react";
import { Aliment, Menu } from "../types/types";
import LargeCard from "../components/LargeCard";
import SmallCard from "../components/SmallCard";

/*
 * Page MoinsDeTreize
 * -------------------
 * Cette page affiche tous les menus contenant
 * strictement moins de 13 pièces.
 *
 * Les données sont chargées depuis un fichier JSON,
 * puis filtrées avant d’être affichées.
 */
function MoinsDeTreize() {
  /*
   * useState
   * --------
   * - data : tableau contenant tous les menus filtrés
   *          (ceux ayant moins de 13 pièces).
   *
   * Initialisé à un tableau vide, rempli après chargement du JSON.
   */
  const [data, setData] = useState<Menu[]>([]);

  /*
   * useEffect - Chargement et filtrage des menus
   * --------------------------------------------
   * - Appelé une seule fois au montage du composant ([]).
   * - Récupère tous les menus depuis "/data/boxes.json".
   * - Utilise une boucle pour filtrer uniquement ceux
   *   ayant moins de 13 pièces grâce à CheckLessThanThirteen().
   * - Met ensuite à jour le state avec les résultats.
   */
  useEffect(() => {
    const fetchData = async () => {
      // Lecture du fichier JSON
      const res = await fetch("/data/boxes.json");
      const data = await res.json();

      // Tableau des menus filtrés
      let filtredData: Menu[] = [];

      // Boucle pour sélectionner uniquement les menus < 13 pièces
      for (let i = 0; i < data.length; i++) {
        if (CheckLessThanThirteen(data[i])) {
          filtredData.push(data[i]);
        }
      }

      // Mise à jour du state avec les menus éligibles
      setData(filtredData);
    };

    fetchData();
  }, []);

  /*
   * Fonction CheckLessThanThirteen
   * -------------------------------
   * Vérifie si un menu contient strictement moins de 13 pièces.
   *
   * Retourne :
   *   - true : si le menu doit être conservé
   *   - false : sinon
   */
  const CheckLessThanThirteen = (menu: Menu): boolean => {
    return menu.pieces < 13;
  };

  /*
   * Rendu du composant
   * -------------------
   * - Affiche le prix total de tous les menus filtrés.
   *   Calculé grâce à reduce().
   *
   * - Affiche chaque menu sous forme de LargeCard.
   *   Chaque élément est affiché dans une grille responsive Bootstrap.
   */
  return (
    <div className="container">
      <h1 className="text-center fst-italic" data-aos="fade-down">Moins de 13€</h1>
      {/* Prix total des menus affichés */}
      <h2 className="my-4" data-aos="fade-down">
        Prix total : {data.reduce((total, menu) => total + menu.prix, 0)} €
      </h2>

      {/* Liste des menus filtrés */}
      <div className="row g-4 justify-content-center" data-aos="fade-up">
        {data.map((menu) => (
          <div className="col-6 col-md-6 mb-3 d-flex" key={menu.id}>
            {/* SmallCard sur mobile uniquement */}
            <div className="d-md-none w-100">
              <SmallCard {...menu} />
            </div>
            {/* LargeCard sur desktop uniquement */}
            <div className="d-none d-md-block w-100">
              <LargeCard {...menu} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoinsDeTreize;

import { useState, useEffect } from "react";
import { Menu } from "../types/types";
import LargeCard from "../components/LargeCard";
import SmallCard from "../components/SmallCard";

/*
 * Page AvocatCoriandre
 * ---------------------
 * Cette page affiche uniquement les menus contenant la saveur "avocat"
 * ou "coriandre".
 * Les données sont chargées depuis un fichier JSON, puis filtrées
 * avant d'être affichées sous forme de grandes cartes.
 */
function AvocatCoriandre() {
  /*
   * useState
   * --------
   * Contient la liste des menus filtrés :
   * uniquement ceux qui comportent la saveur "avocat" OU "coriandre".
   */
  const [data, setData] = useState<Menu[]>([]);

  /*
   * useEffect - Chargement et filtrage des données
   * ----------------------------------------------
   * - Chargé une seule fois au montage ([])
   * - Récupère toutes les box dans "/data/boxes.json"
   * - Parcourt chaque menu pour vérifier s'il contient :
   *      • "avocat"
   *      • ou "coriandre"
   * - Stocke le résultat filtré dans le state.
   */
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/boxes.json"); // Lecture du fichier JSON
      const data: Menu[] = await res.json(); // Conversion en objet JS

      let filteredData: Menu[] = [];

      /* Parcours des menus pour ne garder que ceux
       * contenant "avocat" OU "coriandre" dans leurs saveurs.
       */
      for (let i = 0; i < data.length; i++) {
        if (
          data[i].saveurs.includes("avocat") ||
          data[i].saveurs.includes("coriandre")
        ) {
          filteredData.push(data[i]);
        }
      }

      setData(filteredData); // Mise à jour du state avec les résultats filtrés
    };

    fetchData();
  }, []);

  /*
   * Rendu du composant
   * -------------------
   * - Affiche les menus filtrés dans une grille bootstrap (2 colonnes par ligne)
   * - Chaque menu est envoyé au composposant LargeCard via "...menu"
   */
  return (
    <div className="container">
      <h1 className="text-center fst-italic" data-aos="fade-down">
        Avocat Coriandre
      </h1>
      <div className="row mt-4 g-4 justify-content-center" data-aos="fade-up">
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

export default AvocatCoriandre;

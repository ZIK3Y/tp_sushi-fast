import { useState, useEffect } from "react";
import { Menu } from "../types/types";
import LargeCard from "../components/LargeCard";
import SmallCard from "../components/SmallCard";

/*
 * Page Saveur
 * ------------
 * Cette page affiche tous les menus disponibles, sous forme de grandes cartes.
 * Elle peut servir de base pour un futur filtrage par saveur si nécessaire.
 */
function Saveur() {
  /*
   * useState
   * --------
   * data : contient la liste complète des menus issus du fichier JSON.
   */
  const [data, setData] = useState<Menu[]>([]);

  /*
   * useEffect - Chargement des données
   * -----------------------------------
   * - Appelé au montage du composant (une seule fois).
   * - Récupère le fichier "/data/boxes.json".
   * - Stocke tous les menus dans le state "data".
   */
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/boxes.json"); // Récupération du fichier JSON
      const data = await res.json(); // Conversion en objet JS
      setData(data); // Mise à jour de l'état
    };
    fetchData();
  }, []);

  /*
   * Rendu du composant
   * -------------------
   * - Affiche une grille bootstrap
   * - Chaque menu utilise une LargeCard pour un affichage détaillé
   */
  return (
    <div className="container">
      <h1 className="text-center fst-italic" data-aos="fade-down">
        Nos saveurs
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

export default Saveur;

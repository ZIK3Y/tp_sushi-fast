import { useState, useEffect } from "react";
import LargeCard from "../components/LargeCard";
import { Menu, Aliment } from '../types/types';

/*
 * Page CaliforniaSaumonAvocat
 * ----------------------------
 * Cette page affiche tous les menus qui **ne contiennent pas**
 * l'aliment "California Saumon Avocat".
 * Les données sont récupérées depuis un fichier JSON puis filtrées
 * à l'aide d'une fonction booléenne dédiée.
 */
function CaliforniaSaumonAvocat() {

  /*
   * useState
   * --------
   * Contient la liste des menus filtrés, c'est-à-dire uniquement ceux
   * dont la liste des aliments NE contient PAS "California Saumon Avocat".
   */
  const [data, setData] = useState<Menu[]>([]);

  /*
   * useEffect - Récupération et filtrage des menus
   * ----------------------------------------------
   * - Chargé une seule fois au montage du composant ([]).
   * - Lit le fichier "/data/boxes.json".
   * - Parcourt chaque menu et utilise CheckCSA()
   *   pour déterminer s'il doit être conservé.
   */
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/boxes.json"); // Lecture du JSON
      const data: Menu[] = await res.json(); // Conversion en objet JS

      let filteredData: Menu[] = [];

      /*
       * Pour chaque menu :
       * - On vérifie que sa liste d'aliments NE contient pas
       *   l'élément "California Saumon Avocat".
       * - Si c'est le cas : on garde le menu.
       */
      for (let i = 0; i < data.length; i++) {
        if (CheckCSA(data[i].aliments)) {
          filteredData.push(data[i]);
        }
      }

      setData(filteredData); // Mise à jour du state avec le résultat filtré
    };

    fetchData();
  }, []);

  /*
   * CheckCSA
   * --------
   * Fonction booléenne qui renvoie :
   *   - false : si l'aliment "California Saumon Avocat" est présent
   *   - true : sinon
   *
   * Aliment utilisé pour exclure certains menus.
   */
  const CheckCSA = (aliments: Aliment[]): boolean => {
    for (let i = 0; i < aliments.length; i++) {
      if (aliments[i].nom === "California Saumon Avocat") {
        return false; // L'aliment est présent → menu exclu
      }
    }
    return true; // L'aliment n'a pas été trouvé → menu conservé
  };

  /*
   * Rendu du composant
   * -------------------
   * - Affiche les menus filtrés dans une grille Bootstrap (2 colonnes).
   * - Chaque entrée est passée à <LargeCard />.
   */
  return (
    <div className="container">
      <h1 className="text-center fst-italic" data-aos="fade-down">California Saumon Avocat</h1>
      <div className="row mt-4 g-4 justify-content-center" data-aos="fade-up">
        {data.map((menu) => (
          <div className="col-6 mb-5 d-flex" key={menu.id}>
            <LargeCard {...menu} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaliforniaSaumonAvocat;
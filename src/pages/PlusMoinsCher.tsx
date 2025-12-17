import { useState, useEffect } from "react";
import { Aliment, Menu } from "../types/types";
import SmallCard from "../components/SmallCard";

/*
 * Page PlusMoinsCher
 * -------------------
 * Cette page affiche automatiquement :
 *   - Le menu le moins cher
 *   - Le menu le plus cher
 *
 * Les données sont chargées depuis le fichier JSON, puis analysées
 * grâce à reduce() pour identifier les menus extrêmes.
 */
function PlusMoinsCher() {
  /*
   * useState
   * --------
   * - moinsCher  : contient le menu avec le plus petit prix
   * - plusCher   : contient le menu avec le prix le plus élevé
   *
   * Initialisés à `null` pour gérer le cas où les données ne sont
   * pas encore chargées.
   */
  const [moinsCher, setMoinsCher] = useState<Menu | null>(null);
  const [plusCher, setPlusCher] = useState<Menu | null>(null);

  /*
   * useEffect - Chargement et analyse des menus
   * -------------------------------------------
   * - Appelé une seule fois au montage du composant ([]).
   * - Récupère tous les menus depuis "/data/boxes.json".
   * - Utilise reduce() pour déterminer :
   *      → l'item ayant le prix minimum
   *      → l'item ayant le prix maximum
   */
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/boxes.json"); // Lecture du fichier JSON
      const menus: Menu[] = await res.json(); // Conversion

      /*
       * Détermination du menu le moins cher
       * -----------------------------------
       * reduce() parcourt la liste et conserve l'élément
       * dont le prix est le plus bas.
       */
      const moins = menus.reduce((min, item) =>
        item.prix < min.prix ? item : min
      );

      /*
       * Détermination du menu le plus cher
       * ----------------------------------
       * Même principe que pour "moins", mais en comparant
       * les prix à l'inverse.
       */
      const plus = menus.reduce((max, item) =>
        item.prix > max.prix ? item : max
      );

      /*
       * Mise à jour du state avec les résultats calculés.
       */
      setMoinsCher(moins);
      setPlusCher(plus);
    };

    fetchData();
  }, []);

  /*
   * Rendu du composant
   * -------------------
   * - Affiche deux sections :
   *      1. Le menu le moins cher
   *      2. Le menu le plus cher
   *
   * - SmallCard est utilisé pour représenter visuellement chaque menu.
   * - Les sections ne s'affichent que si les données ont été chargées.
   */
  return (
    <div className="container mt-5">
      {/* Section menu le moins cher */}
      {moinsCher && (
        <div className="mb-5">
          <h2 className="text-center mb-3">Menu le moins cher</h2>
          <div className="row justify-content-center">
            <div className="col-6 col-sm-6 col-md-4">
              <SmallCard {...moinsCher} />
            </div>
          </div>
        </div>
      )}

      {/* Section menu le plus cher */}
      {plusCher && (
        <div className="mb-5">
          <h2 className="text-center mb-3">Menu le plus cher</h2>
          <div className="row justify-content-center">
            <div className="col-6 col-sm-6 col-md-4">
              <SmallCard {...plusCher} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlusMoinsCher;

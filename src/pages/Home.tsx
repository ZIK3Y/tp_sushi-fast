import { useState, useEffect } from "react";
import { Menu } from '../types/types';
import SmallCard from "../components/SmallCard";

/*
 * Page d'accueil : Home
 * ----------------------
 * Cette page charge toutes les box depuis un fichier JSON
 * puis les affiche sous forme de cartes.
 */
function Home() {

  /*
   * useState
   * ------------
   * Contient la liste complète des menus (boxes) chargés depuis le JSON.
   */
  const [data, setData] = useState<Menu[]>([]);

  /**
   * useEffect - Chargement du JSON au montage du composant
   * ------------------------------------------------------
   * - S'exécute une seule fois (tableau de dépendances vide [])
   * - Va chercher le fichier "/data/boxes.json"
   * - Convertit la réponse en JSON
   * - Stocke la liste complète des menus dans le state
   */
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/boxes.json"); // Lecture du fichier JSON
      const data = await res.json();              // Conversion en objet JS
      setData(data);                              // Mise à jour du state
    };
    fetchData();
  }, []);

  /**
   * Rendu du composant
   * -------------------
   * - Affiche une grille bootstrap (3 colonnes par ligne)
   * - Chaque menu est passé au composant SmallCard via "...menu"
   */
  return (
    <>
      <div className="container">
        <h1 className="text-center fst-italic">Nos menus</h1>
        <div className="row mt-5">
          {data.map((menu) => (
            <div className="col-4 mb-5" key={menu.id}>
              <SmallCard {...menu} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
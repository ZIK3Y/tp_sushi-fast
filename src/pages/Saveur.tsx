import { useState, useEffect } from 'react';
import { Menu } from '../types/types';
import LargeCard from '../components/LargeCard';

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
      const data = await res.json();              // Conversion JSON → objet JS
      setData(data);                              // Mise à jour de l'état
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
    <div className="container mt-5">
      <div className="row g-4 justify-content-center">
        {data.map(menu => (
          <div className="col-6 mb-3 d-flex" key={menu.id}>
            <LargeCard {...menu} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Saveur;
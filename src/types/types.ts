/*
 * Types principaux pour le projet SushiFast
 * -----------------------------------------
 * Définissent la structure des menus et des aliments.
 */

/*
 * Aliment
 * -------
 * Représente un aliment individuel dans un menu.
 * 
 * nom : Nom de l'aliment 
 * quantite : Quantité de l'aliment dans le menu
 */
type Aliment = {
    nom: string;
    quantite: number;
};

/*
 * Menu
 * ----
 * Représente un menu complet de SushiFast.
 * 
 * id : Identifiant unique du menu
 * nom : Nom du menu
 * pieces : Nombre total de pièces
 * prix : Prix du menu en euros
 * image : Nom du fichier image associé
 * aliments : Liste des aliments contenus dans le menu
 * saveurs : Liste des saveurs présentes dans le menu
 */
type Menu = {
    id: number;
    nom: string;
    pieces: number;
    prix: number;
    image: string;
    aliments: Aliment[];
    saveurs: string[];
};

// Export des types pour les utiliser dans d'autres fichiers
export { Aliment, Menu };
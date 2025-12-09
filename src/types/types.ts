type Aliment = {
    nom: string;
    quantite: number;
};

type Menu = {
    id: number;
    nom: string;
    pieces: number;
    prix: number;
    image: string;
    aliments: Aliment;
    saveurs: string[];
};

export {
    Aliment,
    Menu,
}
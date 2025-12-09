import { useState, useEffect } from 'react';

type Aliment = {
    nom: string;
    quantite: number;
}

type Menu = {
    id: number;
    nom: string;
    pieces: number;
    prix: number;
    image: string;
    aliments: Aliment[];
    saveurs: string[];
}

function AvocatCoriandre() {
    const [data, setData] = useState<Menu[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/data/boxes.json");
            const data = await res.json();
            let filteredData: Menu[] = []
            for (let i = 0; i < data.length; i++) {
                if (data[i].saveurs.includes("avocat") || data[i].saveurs.includes("coriandre")) {
                    filteredData.push(data[i]);
                }
            }
            setData(filteredData);
        };
        fetchData();
    }, []);

    return (
        <div className="container mt-5">
            <div className="row g-4 justify-content-center">
                {data.map(menu => (
                    <div className="col-6 mb-3 d-flex" key={menu.id}>
                        <div className="card p-3 shadow-sm flex-fill">
                            <div className="row g-2 align-items-center h-100">
                                <div className="col-md-6 text-center text-md-start d-flex flex-column justify-content-center">
                                    <h3 className="fw-bold">{menu.nom}</h3>
                                    <ul className="list-unstyled mb-0">
                                        {menu.saveurs.map(saveur => (
                                            <li className="fs-5" key={saveur}>{saveur}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-md-6 d-flex justify-content-center align-items-center">
                                    <img
                                        src={`/assets/images/${menu.image}.jpg`}
                                        alt={menu.nom}
                                        className="img-fluid rounded"
                                        style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AvocatCoriandre;
import { useState, useEffect } from 'react';
import { Menu, Aliment } from '../types/types';
import LargeCard from '../components/LargeCard';

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
                        <LargeCard {...menu} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AvocatCoriandre;
import { useState, useEffect } from "react";
import LargeCard from "../components/LargeCard";
import { Menu, Aliment } from '../types/types';

function CaliforniaSaumonAvocat() {
  const [data, setData] = useState<Menu[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/boxes.json");
      const data = await res.json();
      let filteredData: Menu[] = [];
      for (let i = 0; i < data.length; i++) {
        if (CheckCSA(data[i].aliments)) {
          filteredData.push(data[i]);
        }
      }
      setData(filteredData);
    };
    fetchData();
  }, []);

  // Fonction booléenne qui renvoie True si la liste des aliments ne contient pas "California Saumon Avocat"
  const CheckCSA = (aliments: Aliment[]): boolean => {
    for (let i = 0; i < aliments.length; i++) {
      if (aliments[i].nom === "California Saumon Avocat") {
        return false;
      }
    }
    return true;
  };

  return (
    <div className="container mt-5">
      <div className="row g-4 justify-content-center">
        {data.map((menu) => (
          <div className="col-6 mb-3 d-flex" key={menu.id}>
            <LargeCard {...menu} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaliforniaSaumonAvocat;

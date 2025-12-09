import { useState, useEffect } from "react";
import { Menu } from "../types/types";
import LargeCard from "../components/LargeCard";

function LessThanThirteen() {
  const [data, setData] = useState<Menu[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/boxes.json");
      const data = await res.json();
      let filtredData: Menu[] = [];
      for (let i = 0; i < data.length; i++) {
        if (CheckLessThanThirteen(data[i])) {
          filtredData.push(data[i]);
        }
      }
      setData(filtredData);
    };
    fetchData();
  }, []);

  // Vérifie si le menu contient moins de 13 pieces
  const CheckLessThanThirteen = (menu: Menu): boolean => {
    return menu.pieces < 13;
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">
        Prix total : {data.reduce((total, menu) => total + menu.prix, 0)} €
      </h2>
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

export default LessThanThirteen;

import { useState, useEffect } from 'react';
import { Menu, Aliment } from '../types/types';
import LargeCard from '../components/LargeCard';

function Saveur() {
  const [data, setData] = useState<Menu[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/boxes.json");
      const data = await res.json();
      setData(data);
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

export default Saveur;
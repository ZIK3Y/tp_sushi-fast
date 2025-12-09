import { useState, useEffect } from "react";
import { Menu, Aliment } from '../types/types';
import SmallCard from "../components/SmallCard";

function Home() {
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
    <>
      <div className="container">
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

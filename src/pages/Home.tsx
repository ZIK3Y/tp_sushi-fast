import {useState, useEffect } from 'react';

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
  aliments: Aliment;
  saveurs: string[];
}

function Home() {

  const [data, setData] = useState<Menu[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/boxes.json")
      const data = await res.json();
      setData(data);
    }
    fetchData();
  }, [])

  return (
    <>
      <div className='container'>
        <div className='row mt-5'>
          {data.map(menu => (
            <div className='col-4 mb-5' key={menu.id}>
              <div className="card">
                <img src={`/assets/images/${menu.image}.jpg`} className="card-img-top my-2" alt="Image du menu" />
                <div className="card-body">
                  <h5 className="card-title fs-3 fw-bold">{menu.nom}</h5>
                  <div className='row mb-3'>
                    <div className='col-6 fs-5'>
                      <p className="card-text">{menu.pieces} pièces</p>
                    </div>
                    <div className='col-6 fs-4'>
                      <p className="card-text fw-bold text-end">{menu.prix}€</p>
                    </div>
                  </div>
                  <a href="#" className="btn btn-danger">Commander</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home

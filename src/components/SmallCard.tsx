import { Menu } from "../types/types";

function SmallCard(props: Menu) {
    return (
        <>
            <div className="card">
                <img
                    src={`/assets/images/${props.image}.jpg`}
                    className="card-img-top my-2"
                    alt="Image du menu"
                />
                <div className="card-body">
                    <h5 className="card-title fs-3 fw-bold">{props.nom}</h5>
                    <div className="row mb-3">
                        <div className="col-6 fs-5">
                            <p className="card-text">{props.pieces} pièces</p>
                        </div>
                        <div className="col-6 fs-4">
                            <p className="card-text fw-bold text-end">{props.prix}€</p>
                        </div>
                    </div>
                    <a href="#" className="btn btn-danger">
                        Commander
                    </a>
                </div>
            </div>
        </>
    )
}

export default SmallCard;

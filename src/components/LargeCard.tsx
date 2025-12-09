import { Menu, Aliment } from "../types/types";

function LargeCard(props: Menu) {
    return (
        <>
            <div className="card p-3 shadow-sm flex-fill">
                <div className="row g-2 align-items-center h-100">
                    <div className="col-md-6 text-center text-md-start d-flex flex-column justify-content-center">
                        <h3 className="fw-bold">{props.nom}</h3>
                        <ul className="list-unstyled mb-0">
                            {props.saveurs.map((saveur) => (
                                <li className="fs-5" key={saveur}>
                                    {saveur}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img
                            src={`/assets/images/${props.image}.jpg`}
                            alt={props.nom}
                            className="img-fluid rounded"
                            style={{
                                maxWidth: "100%",
                                maxHeight: "200px",
                                objectFit: "cover",
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LargeCard;
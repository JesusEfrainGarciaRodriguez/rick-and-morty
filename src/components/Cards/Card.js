export default function Card({name, image, status, species, origin, location}) {
    return(
        <div className="card">
            <img className="card-img" src={image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-status">Status: {status} - {species}</p>
                <p className="card-origin"><span>Origin:</span><br/>{origin.name}</p>
                <p className="card-location"><span>Last known location:</span><br/> {location.name}</p>
            </div>
        </div>
    );
}
export default function Character({name, image, status, species, origin, location}) {
    return(
        <div className="card">
            <div className="card-img">
                <img src={image} alt={name}/>
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-status">Status: {status} - {species}</p>
                <p className="card-origin"><span>Origin:</span><br/>{origin.name}</p>
                <p className="card-location"><span>Last known location:</span><br/> {location.name}</p>
            </div>
        </div>
    );
}
import { Link } from "react-router-dom";
import "../styles/PropertyCard.css";

function PropertyCard({ property, onFavourite }) {
    return (
        <div className="property-card">
            <img src={property.images[0]} alt={property.shortDescription} />

            <div className="property-info">
                <h3>£{property.price.toLocaleString()}</h3>
                <p>{property.shortDescription}</p>

                <button onClick={() => onFavourite(property)}>
                    ❤️ Add to Favourites
                </button>


                <a href="/property/1" className="details-btn">
                    View Details
                </a>
            </div>
        </div>
    );
}


export default PropertyCard;

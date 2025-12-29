import { Link } from "react-router-dom";
import "../styles/PropertyCard.css";

function PropertyCard({ property, onFavourite }) {
    return (
        <div className="property-card" draggable="true">
            {/* Main property image */}
            <img
                src={property.images[0]}
                alt={property.shortDescription}
                className="property-image"
            />

            {/* Property information */}
            <div className="property-info">
                <h3>£{property.price.toLocaleString()}</h3>
                <p>{property.shortDescription}</p>

                {/* Add to Favourites button */}
                <button
                    className="fav-btn"
                    onClick={() => onFavourite(property)}
                >
                    Add to Favourites
                </button>

                {/* Link to Property Details page */}
                <Link
                    to={`/property/${property.id}`}
                    className="details-btn"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}

export default PropertyCard;
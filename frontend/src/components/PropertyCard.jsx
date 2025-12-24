import { Link } from "react-router-dom";

function PropertyCard({ property }) {
    // 🔒 HARD SAFETY CHECK (VERY IMPORTANT)
    if (!property || !Array.isArray(property.images)) {
        return null;
    }

    return (
        <div className="property-card">
            <img
                src={property.images[0]}
                alt="Property"
                className="property-image"
            />

            <h3>£{property.price}</h3>
            <p>
                {property.type} • {property.bedrooms} bedrooms
            </p>
            <p>{property.postcode}</p>

            <Link to={`/property/${property.id}`}>
                View Details
            </Link>
        </div>
    );
}

export default PropertyCard;

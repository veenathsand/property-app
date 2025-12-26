export function filterProperties(properties, criteria) {
    return properties.filter((property) => {
        // Type of the propert
        if (criteria.type !== "any" && property.type !== criteria.type){
            return false;
        }

        // Price of the property
        if (criteria.minPrice && property.price < Number (criteria.minPrice)){
            return false;
        }

        if (criteria.maxPrice && property.price < Number (criteria.maxPrice)){
            return false;
        }

        // Number of bedrooms
        if (property.bedrooms < Number(criteria.minBeds)){
            return false;
        }

        if (property.bedrooms > Number(criteria.maxBeds)){
            return false;
        }

        // Date added
        const propertyDate = new Date(property.dateAdded);

        if (criteria.dateFrom && propertyDate < criteria.dateFrom){
            return false;
        }

        if (criteria.dateTo && propertyDate > criteria.dateTo){
            return false;
        }

        // Postcode (partial match, case-insensitive)
        if (
            criteria.postcode && !property.postcode
                .toLowerCase()
                .startsWith(criteria.postcode.toLowerCase())
        ){
                return false;
        }
        return true;


    });
}
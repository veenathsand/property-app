import { useState } from 'react';
import properties from "../data/properties.json";
import SearchForm from "../components/SearchForm";
import PropertyCard from "../components/PropertyCard";
import { filterProperties } from "../utils/filterProperties";

function SearchPage() {
    const [results, setResults] = useState(properties);

    const handleSearch = (criteria) => {
        const filtered = filterProperties(properties, criteria);
        setResults(filtered); // Filtering logic comes next
    };

    return (
        <div className="container">
            <h1>Estate Agent</h1>
            <SearchForm onSearch={handleSearch} /> // Result will be display here
            <h2>Search Results ({results.length})</h2>
            {results.length === 0 && <p>No properties found.</p>}

            <div className="results-grid">
                {results.map(property => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
}

export default SearchPage;
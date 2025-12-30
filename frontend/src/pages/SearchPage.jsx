import { useState } from "react";
import properties from "../data/properties.json";
import SearchForm from "../components/SearchForm";
import PropertyCard from "../components/PropertyCard";
import SortableFavourites from "../components/SortableFavourites";
import { filterProperties } from "../utils/filterProperties";
import "../styles/SearchPage.css";

function SearchPage() {
    const [results, setResults] = useState(properties);
    const [favourites, setFavourites] = useState([]);

    // Search handler
    const handleSearch = (criteria) => {
        setResults(filterProperties(properties, criteria));
    };

    // Add to favourites using button
    const addToFavourites = (property) => {
        if (!favourites.find(f => f.id === property.id)) {
            setFavourites([...favourites, property]);
        }
    };

    // Handle drag start for native HTML5 drag & drop
    const handleDragStart = (e, property) => {
        e.dataTransfer.setData("property", JSON.stringify(property));
    };

    // Handle drop on favourites
    const handleDrop = (e) => {
        e.preventDefault();
        const property = JSON.parse(e.dataTransfer.getData("property"));
        if (!favourites.find(f => f.id === property.id)) {
            setFavourites([...favourites, property]);
        }
    };

    const handleDragOver = (e) => e.preventDefault();

    return (
        <div className="container">
            <h1 className="page-title">Estate Agent</h1>
            <p className="page-subtitle">Discover your dream home</p>

            {/* Search Form */}
            <section className="search-section">
                <SearchForm onSearch={handleSearch} />
            </section>

            {/* Layout: Results + Favourites */}
            <div className="layout">
                {/* Property Results */}
                <div className="results-grid">
                    {results.map(property => (
                        <PropertyCard
                            key={property.id}
                            property={property}
                            onFavourite={addToFavourites}
                            onDragStart={handleDragStart} // Pass drag handler
                        />
                    ))}
                </div>

                {/* Favourites - Dropzone & sortable */}
                <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                >
                    <SortableFavourites
                        favourites={favourites}
                        setFavourites={setFavourites}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchPage;

import { useState } from "react";
import properties from "../data/properties.json";
import SearchForm from "../components/SearchForm";
import PropertyCard from "../components/PropertyCard";
import SortableFavourites from "../components/SortableFavourites";
import { filterProperties } from "../utils/filterProperties";
import {
    DndContext,
    PointerSensor,
    useSensor,
    useSensors,
    closestCenter
} from "@dnd-kit/core";
import "../styles/SearchPage.css";

function SearchPage() {
    const [results, setResults] = useState(properties);
    const [favourites, setFavourites] = useState([]);

    const sensors = useSensors(useSensor(PointerSensor));

    const handleSearch = (criteria) => setResults(filterProperties(properties, criteria));

    const addToFavourites = (property) => {
        if (!favourites.find(f => f.id === property.id)) {
            setFavourites([...favourites, property]);
        }
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (over && over.id === "favourites-dropzone") {
            const draggedProperty = results.find(p => p.id === active.id);
            if (draggedProperty && !favourites.find(f => f.id === draggedProperty.id)) {
                setFavourites([...favourites, draggedProperty]);
            }
        }
    };

    return (
        <div className="container">
            <h1 className="page-title">Estate Agent</h1>

            {/* Search Form */}
            <section className="search-section">
                <SearchForm onSearch={handleSearch} />
            </section>

            {/* Layout: Results + Favourites */}
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <div className="layout">
                    {/* Property Results */}
                    <div className="results-grid">
                        {results.map(property => (
                            <PropertyCard key={property.id} property={property} onFavourite={addToFavourites} />
                        ))}
                    </div>

                    {/* Favourites - Drag & Drop */}
                    <SortableFavourites favourites={favourites} setFavourites={setFavourites} />
                </div>
            </DndContext>
        </div>
    );
}

export default SearchPage;

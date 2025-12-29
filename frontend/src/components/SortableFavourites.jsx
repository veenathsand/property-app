import React from "react";
import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core";
import {
    SortableContext,
    verticalListSortingStrategy,
    useSortable,
    arrayMove
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "../styles/FavouritesList.css";

// Individual draggable item
function SortableItem({ property, onRemove }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: property.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5rem",
        marginBottom: "0.5rem",
        background: "#f9fafb",
        borderRadius: "6px",
        cursor: "grab"
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <span>£{property.price.toLocaleString()} – {property.postcode}</span>
            <button
                className="remove-btn"
                onClick={(e) => {
                    e.stopPropagation(); // Prevent DnD interference
                    onRemove(property.id);
                }}
            >
                ❌
            </button>
        </div>
    );
}

// Main favourites list
export default function SortableFavourites({ favourites, setFavourites }) {
    const sensors = useSensors(useSensor(PointerSensor));

    // Handle drag end
    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (over && active.id !== over.id) {
            const oldIndex = favourites.findIndex(f => f.id === active.id);
            const newIndex = favourites.findIndex(f => f.id === over.id);
            setFavourites(arrayMove(favourites, oldIndex, newIndex));
        }
    };

    // Remove single favourite
    const removeFavourite = (id) => {
        setFavourites(favourites.filter(f => f.id !== id));
    };

    // Clear all favourites
    const clearFavourites = () => setFavourites([]);

    return (
        <aside className="favourites">
            <h3>Favourites</h3>

            {favourites.length > 0 && (
                <button className="clear-btn" onClick={clearFavourites}>
                    Clear All
                </button>
            )}

            {favourites.length === 0 && <p>No favourites yet</p>}

            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={favourites.map(f => f.id)}
                    strategy={verticalListSortingStrategy}
                >
                    {favourites.map(property => (
                        <SortableItem
                            key={property.id}
                            property={property}
                            onRemove={removeFavourite}
                        />
                    ))}
                </SortableContext>
            </DndContext>
        </aside>
    );
}
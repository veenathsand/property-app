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
    arrayMove
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
import "../styles/FavouritesList.css";

export default function SortableFavourites({ favourites, setFavourites }) {
    const sensors = useSensors(useSensor(PointerSensor));

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (over && active.id !== over.id) {
            const oldIndex = favourites.findIndex(f => f.id === active.id);
            const newIndex = favourites.findIndex(f => f.id === over.id);
            setFavourites(arrayMove(favourites, oldIndex, newIndex));
        }
    };

    const removeFavourite = (id) => setFavourites(favourites.filter(f => f.id !== id));
    const clearFavourites = () => setFavourites([]);

    return (
        <aside className="favourites" id="favourites-dropzone">
            <h3>Favourites</h3>

            {favourites.length > 0 && (
                <button className="clear-btn" onClick={clearFavourites}>Clear All</button>
            )}

            {favourites.length === 0 && <p>No favourites yet</p>}

            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={favourites.map(f => f.id)} strategy={verticalListSortingStrategy}>
                    {favourites.map(property => (
                        <SortableItem key={property.id} property={property} onRemove={removeFavourite} />
                    ))}
                </SortableContext>
            </DndContext>
        </aside>
    );
}

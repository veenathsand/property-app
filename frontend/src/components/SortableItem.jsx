import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function SortableItem({ property, onRemove }) {
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
        <div ref={setNodeRef} style={style}>
            {/* Drag Handle */}
            <span className="drag-handle" {...attributes} {...listeners}>☰</span>

            <span className="fav-text">£{property.price.toLocaleString()} – {property.postcode}</span>

            <button
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

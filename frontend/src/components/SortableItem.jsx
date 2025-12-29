import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function SortableItem({ property, onRemove }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: property.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className="favourite-item"
        >
            {/* DRAG HANDLE */}
                <span
                    className="drag-handle"
                    {...attributes}
                    {...listeners}
                >
                ☰
            </span>

                <span className="fav-text">
                £{property.price.toLocaleString()} – {property.postcode}
            </span>

                <button
                    className="remove-btn"
                    onClick={() => onRemove(property.id)}
                >
                    ❌
                </button>
        </div>
    );
}

export default SortableItem;

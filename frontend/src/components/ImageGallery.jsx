import { useState } from "react";
import "../styles/ImageGallery.css";

function ImageGallery({ images = [] }) {
    const [mainImage, setMainImage] = useState(images[0] || "");

    if (!images || images.length === 0) return <p>No images available</p>;

    return (
        <div className="gallery">
            {/* Main Image */}
            <img src={mainImage} alt="Property" className="main-image" />

            {/* Thumbnail Row */}
            <div className="thumbnail-row">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className={`thumbnail ${img === mainImage ? "active" : ""}`}
                        onClick={() => setMainImage(img)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ImageGallery;

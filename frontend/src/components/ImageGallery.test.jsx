import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ImageGallery from "./ImageGallery";

const images = ["img1.jpg", "img2.jpg", "img3.jpg"];

describe("ImageGallery", () => {
    it("shows message when no images provided", () => {
        render(<ImageGallery images={[]} />);
        expect(screen.getByText("No images available")).toBeInTheDocument();
    });

    it("renders main image", () => {
        render(<ImageGallery images={images} />);
        const mainImage = screen.getByAltText("Property");
        expect(mainImage).toHaveAttribute("src", "img1.jpg");
    });

    it("renders thumbnails", () => {
        render(<ImageGallery images={images} />);
        expect(screen.getAllByAltText(/Thumbnail/).length).toBe(3);
    });

    it("changes main image when thumbnail clicked", () => {
        render(<ImageGallery images={images} />);
        const thumbnails = screen.getAllByAltText(/Thumbnail/);

        fireEvent.click(thumbnails[1]);
        expect(screen.getByAltText("Property")).toHaveAttribute("src", "img2.jpg");
    });
});

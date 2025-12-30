import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PropertyCard from "./PropertyCard";

const property = {
    id: 1,
    price: 400000,
    shortDescription: "Modern flat",
    images: ["house.jpg"]
};

describe("PropertyCard", () => {
    it("renders property information", () => {
        render(
            <MemoryRouter>
                <PropertyCard property={property} />
            </MemoryRouter>
        );

        expect(screen.getByText(/£400,000/)).toBeInTheDocument();
        expect(screen.getByText("Modern flat")).toBeInTheDocument();
    });

    it("calls onFavourite when button clicked", () => {
        const favMock = vi.fn();

        render(
            <MemoryRouter>
                <PropertyCard property={property} onFavourite={favMock} />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText("Add to Favourites"));
        expect(favMock).toHaveBeenCalledWith(property);
    });

    it("contains link to property details page", () => {
        render(
            <MemoryRouter>
                <PropertyCard property={property} />
            </MemoryRouter>
        );

        const link = screen.getByText("View Details");
        expect(link.getAttribute("href")).toBe("/property/1");
    });
});

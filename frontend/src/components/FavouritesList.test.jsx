import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import FavouritesList from "./FavouritesList";

const mockFavourites = [
    { id: 1, price: 250000, postcode: "NW1" },
    { id: 2, price: 300000, postcode: "SW2" }
];

describe("FavouritesList", () => {
    it("renders favourites title", () => {
        render(
            <FavouritesList
                favourites={[]}
                removeFavourite={() => {}}
                clearFavourites={() => {}}
            />
        );
        expect(screen.getByText("Favourites")).toBeInTheDocument();
    });

    it("shows message when no favourites", () => {
        render(
            <FavouritesList
                favourites={[]}
                removeFavourite={() => {}}
                clearFavourites={() => {}}
            />
        );
        expect(screen.getByText("No favourites yet")).toBeInTheDocument();
    });

    it("renders list of favourites", () => {
        render(
            <FavouritesList
                favourites={mockFavourites}
                removeFavourite={() => {}}
                clearFavourites={() => {}}
            />
        );

        expect(screen.getByText(/£250,000/)).toBeInTheDocument();
        expect(screen.getByText(/NW1/)).toBeInTheDocument();
    });

    it("calls removeFavourite when ❌ clicked", () => {
        const removeMock = vi.fn();

        render(
            <FavouritesList
                favourites={mockFavourites}
                removeFavourite={removeMock}
                clearFavourites={() => {}}
            />
        );

        fireEvent.click(screen.getAllByText("❌")[0]);
        expect(removeMock).toHaveBeenCalledWith(1);
    });

    it("calls clearFavourites when Clear All clicked", () => {
        const clearMock = vi.fn();

        render(
            <FavouritesList
                favourites={mockFavourites}
                removeFavourite={() => {}}
                clearFavourites={clearMock}
            />
        );

        fireEvent.click(screen.getByText("Clear All"));
        expect(clearMock).toHaveBeenCalled();
    });
});

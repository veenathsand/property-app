import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "./SearchForm";

describe("SearchForm", () => {
    it("renders search form", () => {
        render(<SearchForm onSearch={() => {}} />);
        expect(screen.getByText("Search Properties")).toBeInTheDocument();
    });

    it("updates input values", () => {
        render(<SearchForm onSearch={() => {}} />);

        const postcodeInput = screen.getByPlaceholderText("e.g. NW1");
        fireEvent.change(postcodeInput, { target: { value: "SW1" } });

        expect(postcodeInput.value).toBe("SW1");
    });

    it("calls onSearch with criteria on submit", () => {
        const searchMock = vi.fn();

        render(<SearchForm onSearch={searchMock} />);
        fireEvent.click(screen.getByText("Search"));

        expect(searchMock).toHaveBeenCalledTimes(1);
        expect(searchMock.mock.calls[0][0]).toHaveProperty("type");
    });
});

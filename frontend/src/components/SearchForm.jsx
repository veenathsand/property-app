import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/SearchForm.css";

function SearchForm({ onSearch }) {
    const [criteria, setCriteria] = useState({
        type: "any",
        minPrice: "",
        maxPrice: "",
        minBeds: 0,
        maxBeds: 0,
        dateFrom: null,
        dateTo: null,
        postcode: ""
    });

    const handleChange = (e) => {
        setCriteria({...criteria, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(criteria);
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <h2>Search Properties</h2>

            {/* Property Type */}
            <label>
                Property Type
                <select name="type" value={criteria.type} onChange={handleChange}>
                    <option value="any">Any</option>
                    <option value="house">House</option>
                    <option value="flat">Flat</option>
                </select>
            </label>

            {/* Price Range */}
            <label>
                Min Price (£)
                <input
                    type="number"
                    name="minPrice"
                    value={criteria.minPrice}
                    onChange={handleChange}
                />
            </label>

            <label>
                Max Price (£)
                <input
                    type="number"
                    name="maxPrice"
                    value={criteria.maxPrice}
                    onChange={handleChange}
                />
            </label>

            {/* Bedrooms */}
            <label>
                Min Bedrooms: {criteria.minBeds}
                <input
                    type="range"
                    min="0"
                    max="6"
                    name="minBeds"
                    value={criteria.minBeds}
                    onChange={handleChange}
                />
            </label>

            <label>
                Max Bedrooms: {criteria.maxBeds}
                <input
                    type="range"
                    min="0"
                    max="6"
                    name="maxBeds"
                    value={criteria.maxBeds}
                    onChange={handleChange}
                />
            </label>

            {/* Date Range */}
            <label>
                Date From
                <DatePicker
                    selected={criteria.dateFrom}
                    onChange={(date) => setCriteria({ ...criteria, dateFrom: date })}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select start date"
                />
            </label>

            <label>
                Date To
                <DatePicker
                    selected={criteria.dateTo}
                    onChange={(date) => setCriteria({ ...criteria, dateTo: date })}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select end date"
                />
            </label>

            {/* Postcode */}
            <label>
                Postcode Area
                <input
                    type="text"
                    name="postcode"
                    value={criteria.postcode}
                    onChange={handleChange}
                    placeholder="e.g. NW1"
                />
            </label>

            <button className="search-btn" type="submit">Search</button>

        </form>
    );
}

export default SearchForm;
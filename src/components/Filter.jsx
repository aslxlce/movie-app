import React from "react";

const Filter = ({ setSearch, setRating }) => {
    return (
        <div className="filter">
            <input
                type="text"
                placeholder="Search by title..."
                onChange={(e) => setSearch(e.target.value)}
            />
            <input
                type="number"
                placeholder="Filter by rating..."
                onChange={(e) => setRating(Number(e.target.value))}
                min="1"
                max="5"
            />
        </div>
    );
};

export default Filter;

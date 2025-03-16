import React, { useState } from "react";

const AddMovie = ({ addMovie }) => {
    const [newMovie, setNewMovie] = useState({
        title: "",
        description: "",
        posterURL: "",
        rating: "",
    });

    const handleChange = (e) => {
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addMovie(newMovie);
        setNewMovie({ title: "", description: "", posterURL: "", rating: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
            <input
                type="text"
                name="description"
                placeholder="Description"
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="posterURL"
                placeholder="Poster URL"
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="rating"
                placeholder="Rating"
                onChange={handleChange}
                min="1"
                max="5"
                required
            />
            <button type="submit">Add Movie</button>
        </form>
    );
};

export default AddMovie;

import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import moviesData from "./moviesData";

const App = () => {
    const [movies, setMovies] = useState(moviesData);
    const [search, setSearch] = useState("");
    const [rating, setRating] = useState(0);

    const filteredMovies = movies.filter(
        (movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase()) && movie.rating >= rating
    );

    const addMovie = (newMovie) => {
        setMovies([...movies, { ...newMovie, rating: Number(newMovie.rating) }]);
    };

    return (
        <div>
            <h1>Movie App</h1>
            <Filter setSearch={setSearch} setRating={setRating} />
            <AddMovie addMovie={addMovie} />
            <MovieList movies={filteredMovies} />
        </div>
    );
};

export default App;

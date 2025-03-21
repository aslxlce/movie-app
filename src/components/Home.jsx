import React from "react";
import Filter from "./Filter";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";

const Home = ({ movies, setSearch, setRating, addMovie }) => {
    return (
        <div>
            <h1>Movie App</h1>
            <Filter setSearch={setSearch} setRating={setRating} />
            <AddMovie addMovie={addMovie} />
            <MovieList movies={movies} />
        </div>
    );
};

export default Home;

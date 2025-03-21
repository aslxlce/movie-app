import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import moviesData from "./moviesData";
import MovieDetails from "./components/MovieDetails";
import Home from "./components/Home";

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
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            movies={filteredMovies}
                            setSearch={setSearch}
                            setRating={setRating}
                            addMovie={addMovie}
                        />
                    }
                />
                <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
            </Routes>
        </Router>
    );
};

export default App;

import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <h3>{movie.title}</h3>
            <img src={movie.posterURL} alt={movie.title} />
            <p>⭐ {movie.rating}</p>
            <Link to={`/movie/${movie.id}`}>View Details</Link>
        </div>
    );
};

export default MovieCard;

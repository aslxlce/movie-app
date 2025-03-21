import React from "react";
import { useParams, Link } from "react-router-dom";

const MovieDetails = ({ movies }) => {
    const { id } = useParams();
    const movie = movies.find((m) => m.id === Number(id));

    if (!movie) {
        return <h2>Movie Not Found</h2>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <iframe
                width="560"
                height="315"
                src={movie.trailer}
                title="Movie Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <br />
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default MovieDetails;

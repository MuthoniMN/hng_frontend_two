import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MovieDetails = ({ movie }) => {
    return (
        <>
            <div className="d-flex clear">
                <h3 data-testid="movie-title">{movie.original_title}</h3>
                <p data-testid="movie-release-date">{movie.release_date}</p>
                <p><span data-testid="movie-runtime">{movie.runtime}</span> minutes</p>
            </div>
            <p data-testid="movie-overview">{movie.overview}</p>
        </>
    )
}

export default MovieDetails;
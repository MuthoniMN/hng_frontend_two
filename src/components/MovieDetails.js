import React from "react";

const MovieDetails = ({ movie }) => {
    return (
        <div className="container-fluid clear p-4 p-sm-2">
            <div className="d-flex flex-wrap gap-3 align-items-baseline justify-content-start movieDetails">
                <h4 data-testid="movie-title">{movie.original_title}</h4> 
                <div></div>
                <p data-testid="movie-release-date">{movie.release_date}</p> 
                <div></div>
                <p><span data-testid="movie-runtime">{movie.runtime}</span> minutes</p>
            </div>
            <p data-testid="movie-overview" className="movOverview">{movie.overview}</p>
        </div>
    )
}

export default MovieDetails;
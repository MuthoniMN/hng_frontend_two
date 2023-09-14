import React from "react";

const MovieDetails = ({ movie }) => {
    return (
        <div className="clear p-4 container-fluid mov">
            <div className="d-flex flex-wrap gap-3 align-items-baseline justify-content-start movieDetails">
                <h3 data-testid="movie-title">{movie.original_title}</h3> 
                <div></div>
                <p data-testid="movie-release-date">{movie.release_date}</p> 
                <div></div>
                <p><span data-testid="movie-runtime">{movie.runtime}</span> minutes</p>
            </div>
            <p data-testid="movie-overview" className="col-sm-4">{movie.overview}</p>
        </div>
    )
}

export default MovieDetails;
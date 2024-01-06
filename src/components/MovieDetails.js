import React from "react";
import { Badge } from "react-bootstrap";

const MovieDetails = ({ movie }) => {
    return (
        <div className="container-fluid clear p-8 p-sm-2">
            <div className="d-flex gap-4 flex-wrap">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title || movie.name} data-testid="movie-poster" className="poster w-25" loading="lazy" style={{ minWidth: "320px" }} />
                <div>
                    <h4 data-testid="movie-title" className="fw-bold">{movie.original_title || movie.name}</h4>
                    <div className="d-flex flex-wrap my-2">
                        {movie.genres ?
                            movie.genres.map(genre => {
                                return (<Badge style={{ background: "#BE123C", color: "white" }} className="me-2" key={genre.id}>{genre.name}</Badge>)
                            }) : "No genres"}
                    </div>
                    <p data-testid="movie-release-date">Released on: {movie.release_date}</p>
                    <p><span data-testid="movie-runtime">Duration: {movie.runtime}</span> minutes</p>
                    <p data-testid="movie-overview" className="movOverview">{movie.overview}</p>
                    <p><a href={movie.homepage} target="blank">View the {movie.title || movie.name} website.</a></p>
                </div>

            </div>

        </div>
    )
}

export default MovieDetails;
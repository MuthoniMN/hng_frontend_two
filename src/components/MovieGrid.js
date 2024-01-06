import React from "react";
import MovieGridTitle from "./MovieGridTitle";
import Ratings from "./Ratings"
import { Link } from "react-router-dom";

const MovieGrid = ({ movies, favoriteComponent, title }) => {
    const FavoriteComponent = favoriteComponent
    return <section className="row m-3 mt-5 movies" >
        <MovieGridTitle title={title} />
        <section className="row movieGrid">
            {movies.map((movie, index) => {
                if (index < 12) {
                    return (
                        <div className="card d-flex justify-content-start flex-direction-column" data-testid="movie-card" id={movie.id} key={movie.id}>

                            <Link to={`/movie/${movie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} data-testid="movie-poster" className="poster" loading="lazy" />
                                <p className="gray" data-testid="movie-release-date">{movie.release_date}</p>
                                <h4 data-testid="movie-title">{movie.title}</h4>
                                <Ratings fraction={movie.vote_count} percent={`${Math.round(movie.vote_average * 10)}%`} />
                            </Link>
                            <div className="overlay d-flex align-items-center justify-content-center">
                                <FavoriteComponent />
                            </div>
                        </div>
                    )
                }
                return []
            })}
        </section>
    </section>
}

export default MovieGrid
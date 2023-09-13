import React, { useState, useEffect } from "react";
import MovieGridTitle from "./MovieGridTitle";
import Ratings from "./Ratings"

const MovieGrid = ({ movies, favoriteComponent}) => {
    const FavoriteComponent =  favoriteComponent
    return <section className="row m-3 mt-5 movies" >
        <MovieGridTitle />
        <section className="row movieGrid">
        {movies.map((movie, index) => {
            if (index < 10) {
                return <div className="card d-flex justify-content-start flex-direction-column" data-testid="movie-card" id={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} data-testid="movie-poster" className="poster" loading="lazy"/>
                    <p className="gray" data-testid="movie-release-date">{movie.release_date}</p>
                    <h4 data-testid="movie-title">{movie.title}</h4>
                    <Ratings fraction={movie.vote_count} percent={`${movie.vote_average*10}%`} />
                    <div className="overlay d-flex align-items-center justify-content-center">
                        <FavoriteComponent />
                    </div>
                </div>
            }
        })}
        </section>
    </section>
}

export default MovieGrid
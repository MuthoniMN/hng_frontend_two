import React, { useState, useEffect } from "react";

const MovieGrid = ({ movies, favoriteComponent}) => {
    const FavoriteComponent =  favoriteComponent
    return <section className="row m-3 movies" >
        {movies.map((movie, index) => {
            if (index < 10) {
                return <div className="card d-flex justify-content-start flex-direction-column" data-testid="movie-card" id={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} data-testid="movie-poster" className="poster" loading="lazy"/>
                    <p className="gray" data-testid="movie-release-date">{movie.release_date}</p>
                    <h4 data-testid="movie-title">{movie.title}</h4>
                    <div className="overlay d-flex align-items-center justify-content-center">
                        <FavoriteComponent />
                    </div>
                </div>
            }
        })}
    </section>
}

export default MovieGrid
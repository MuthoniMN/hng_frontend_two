import React  from "react";

const MovieGrid = ( {movies} ) => {
    return <>
        {movies.map((movie, index) => {
            if(index < 10){
                return <div className="card" data-testid="movie-card" id={movie.id}>
                    <img src={movie.poster_path}  data-testid="movie-poster"/>
                    <p data-testid="movie-release-date">{movie.release_date}</p>
                    <h3 data-testid="movie-title">{movie.title}</h3>
                </div>
            }
        })}
    </>
}

export default MovieGrid
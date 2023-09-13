import React  from "react";

const MovieGrid = ( {movies} ) => {
    return <section className="d-flex m-3 movies" >
        {movies.map((movie, index) => {
            if(index < 10){
                return <div className="card d-flex justify-content-start flex-direction-column" data-testid="movie-card" id={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  data-testid="movie-poster"/>
                    <p className="gray" data-testid="movie-release-date">{movie.release_date}</p>
                    <h4 data-testid="movie-title">{movie.title}</h4>
                </div>
            }
        })}
    </section>
}

export default MovieGrid
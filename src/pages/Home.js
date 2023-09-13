import React, { useEffect, useState } from "react";

const Home = () => {
    const [movies, setMovies] = useState([])

    const getMovieRequest = async () => {
        const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=fd14b8822352d61899d7c4f5f76fe82a"

        const response = await fetch(url)
        const responseJSON = await response.json()
        setMovies(responseJSON.results)
    }

    useEffect(() => {
        getMovieRequest()
    }, [])

    return (
        <div className="App">
            <HeroSection />
            <MovieGrid movies={movies} favoriteComponent={AddFavorite} />
            <Footer />
        </div>
    );
}

export default Home;
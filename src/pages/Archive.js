import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import MovieGrid from "../components/MovieGrid";
import AddFavorite from "../components/AddFavorite";
import Footer from "../components/Footer";

const Archive = ({ query, title, type }) => {
    const [movies, setMovies] = useState([])

    const getMovieRequest = async () => {
        const url = `https://api.themoviedb.org/3/${query}?api_key=${process.env.REACT_APP_API_KEY}`

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
            <MovieGrid movies={movies} favoriteComponent={AddFavorite} title={title} type={type} />
            <Footer />
        </div>
    );
}

export default Archive;
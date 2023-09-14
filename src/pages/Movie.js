import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import MovieDetails from "../components/MovieDetails";

const Movie = () => {
    const [moviedet, setMoviedet] = useState([]);
    const { id } = useParams()

    const getMovieRequest = async () => {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`

        const response = await fetch(url)
        const responseJSON = await response.json()
        setMoviedet(responseJSON)
    }

    useEffect(() => {
        getMovieRequest()
    })
    return (
        <>
            <SideBar />
            <MovieDetails movie={moviedet}/>
        </>
    )
}

export default Movie;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import MovieDetails from "../components/MovieDetails";

const Movie = ({ type }) => {
    const [moviedet, setMoviedet] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams()

    useEffect(() => {
        const getMovieRequest = async () => {
            const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_API_KEY}`

            setLoading(true)

            const response = await fetch(url)
            const responseJSON = await response.json()
            setLoading(false)

            return responseJSON
        }
        getMovieRequest().then(data => setMoviedet(data));
    }, [type, id])

    if (loading) {
        return "Loading the movie....."
    }

    return (
        <div className="d-flex gap-5 align-items-center">
            <SideBar />
            <MovieDetails movie={moviedet} />
        </div>
    )
}

export default Movie;
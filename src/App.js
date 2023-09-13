import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MovieGrid from './components/MovieGrid';
import React , { useState, useEffect } from 'react';
import MovieGridTitle from './components/MovieGridTitle';
import AddFavorite from './components/AddFavorite';

function App() {
  const [favorites, setFavorites] = useState([])
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
      <MovieGridTitle />
       <MovieGrid  movies={movies}favoriteComponent={AddFavorite}/>
    </div>
  );
}

export default App;

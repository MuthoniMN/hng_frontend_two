import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MovieGrid from './components/MovieGrid';
import React , { useState, useEffect } from 'react';

function App() {
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
      <div className='d-flex m-3 title'>
        <h2>Featured Movies</h2>
        <a href='#' >See More</a>
      </div>
    <MovieGrid  movies={movies}/>
    </div>
  );
}

export default App;

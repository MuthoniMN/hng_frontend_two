import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MovieGrid from './components/MovieGrid';
import React , { useState, useEffect } from 'react';
import AddFavorite from './components/AddFavorite';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Movie from './pages/Movie'
import SearchResults from './pages/SearchResults'
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/movie/:id'>
          <Movie />
        </Route>
        <Route>
          <SearchResults />
        </Route>
      </Switch>
       <Footer />
    </div>
  );
}

export default App;

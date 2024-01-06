import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React from 'react';
import Movie from './pages/Movie'
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Archive from './pages/Archive';

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/movie/",
      children: [
        {
          path: ":id",
          element: <Movie type={'movie'} />,
        }
      ]
    },
    {
      path: "/movies",
      element: <Archive query={"movie/popular"} title="Popular Movies" type={"movie"} />
    },
    {
      path: "/tv/",
      children: [
        {
          path: ":id",
          element: <Movie type={'tv'} />,
        }
      ]
    },
    {
      path: "/tv-series",
      element: <Archive query={"tv/popular"} title="Popular TV Series" type={"tv"} />,
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/upcoming",
      element: <Archive query={"movie/upcoming"} title="Upcoming Movies" type={"movie"} />
    }
  ]);

  return element;
}

export default App;

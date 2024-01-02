import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React from 'react';
import Movie from './pages/Movie'
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

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
          element: <Movie />,
        }
      ],
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/login",
      element: <Login />
    }
  ]);

  return element;
}

export default App;

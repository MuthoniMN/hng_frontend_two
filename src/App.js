import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React from 'react';
import Movie from './pages/Movie'
import { useRoutes } from 'react-router-dom';
import Home from './pages/Home';

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
    }
  ]);

  return element;
}

export default App;

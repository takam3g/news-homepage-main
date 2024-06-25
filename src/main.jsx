import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import New from './routes/New';
import Popular from './routes/Popular';
import Trending from './routes/Trending';
import Categories from './routes/Categories';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/new",
    element: <New />,
  },
  {
    path: "/popular",
    element: <Popular />,
  },
  {
    path: "/trending",
    element: <Trending />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom'; // Add this line
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './pages/Home'
import ActivityPage from './pages/ActivityPage'
import User from './pages/User'
import Category from './pages/Category'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'activity',
    element: <ActivityPage />
  },
  {
    path: 'user',
    element: <User />
  },
  {
    path: 'category',
    element: <Category />
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


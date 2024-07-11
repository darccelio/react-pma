import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './route/Home'
import ActivityPage from './route/ActivityPage'
import User from './route/User'
import Category from './route/Category'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/activity',
    element: <ActivityPage />
  },
  {
    path: '/user',
    element: <User />
  },
  {
    path: '/category',
    element: <Category />
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


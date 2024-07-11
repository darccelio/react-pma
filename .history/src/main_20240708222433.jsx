import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './route/root'
import Home from './route/home'
import ActivityPage from './route/activity'
import User from './route/user'
import Category from './route/category'
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


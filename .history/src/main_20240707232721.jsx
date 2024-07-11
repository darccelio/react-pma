import React from 'react'

import AppRoutes from './routes.js'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import ActivityPage from './pages/ActivityPage'
import User from './pages/User'
import Category from './pages/Category'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/activity',
    element: <ActivityPage />,
  },
  {
    path: '/user',
    element: <User />,
  },
  {
    path: '/category',
    element: <Category />,
  },
])

ReactDOM.createPortal(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <AppRoutes />
    </RouterProvider>
  </React.StrictMode>
)


import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './route/root'
import ErrorPage from './route/error-page'
// import Contact from './route/contact'
import Index from './route/index'

import ActivityPage from './route/activity'
import User from './route/user'
import Category from './route/category'
import UserEdit from './route/userEdit'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: '/activities',
        element: <ActivityPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/users',
        element: <User />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/user/:userId',
        element: <UserEdit />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/categories',
        element: <Category />,
        errorElement: <ErrorPage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

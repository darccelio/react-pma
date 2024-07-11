import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './route/root'
import ErrorPage from './route/error-page'
import Contact from './route/contact'
import Index from './route/index'
import Home from './route/home'
import ActivityPage from './route/activity'
import User from './route/user'
import Category from './route/category'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: 'contacts/:contactId',
        element: <Contact />,
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
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

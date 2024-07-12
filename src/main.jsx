import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import Root from './route/root'
import ErrorPage from './route/error-page'
import Index from './route/index'

import ActivityPage from './route/activity'
import ActivityDetail from './route/activityDetail'
import User from './route/user'
import UserDetail from './route/userDetail'
import Category from './route/category'
import CategoryDetail from './route/categoryDetail'


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
        path: '/activity/:id',
        element: <ActivityDetail />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/users',
        element: <User />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/user/:id',
        element: <UserDetail />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/user/new',
        element: <UserDetail />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/categories',
        element: <Category />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/category/:id',
        element: <CategoryDetail />,
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

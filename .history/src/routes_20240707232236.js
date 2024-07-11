import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home';
import ActivityPage from './pages/ActivityPage';
import User from './pages/User';
import Category from './pages/Category';


const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home/>,
  },
  {path: "/activity", element: <ActivityPage/>},
  {path: "/user", element: <User/>,},
  {path: "/category", element: <Category/>}
])



function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ActivityPage />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  )
}

export default AppRoutes;
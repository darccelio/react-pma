import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ActivityPage from './pages/ActivityPage';


const router = createBrowserRouter([
  {
    path: "/"
  }
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
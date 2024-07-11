import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ActivityPage from './pages/ActivityPage';


function AppRoutes() {
  return (
    <BrowserRouter>      
        <Routes>
          <Route path="/" element={<ActivityPage />} />         
        </Routes>      
    </BrowserRouter>
  )
}

export default AppRoutes;
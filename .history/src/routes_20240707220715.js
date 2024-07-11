import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ActivityPage from './pages/ActivityPage.jsx';


function AppRoutes() {
  return (
    <BrowserRouter>      
        <Routes>
          <Route path="/" element={<ActivityPage />}></Route>           
        </Routes>      
    </BrowserRouter>
  )
}

export default RoutesApp;
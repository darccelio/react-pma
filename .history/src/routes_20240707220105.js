import { BrowserRouter, Route, Routes } from "react-router-dom";

import ActivityPage from './pages/ActivityPage.jsx';


function AppRoutes() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<ActivityPage />}></Route>           
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default RoutesApp;
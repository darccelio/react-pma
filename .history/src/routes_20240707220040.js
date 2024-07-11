import { BrowserRouter, Route, Routes } from "react-router-dom";

import ActivityPage from './pages/ActivityPage.jsx';

// const Private = ({ Item }) => {
//   const { signed } = useAuth();

//   return signed > 0 ? <Item /> : <Signin />;
// };

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
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import ActivityPage from './pages/ActivityPage';

// const Private = ({ Item }) => {
//   const { signed } = useAuth();

//   return signed > 0 ? <Item /> : <Signin />;
// };

function AppRoutes() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registrar" element={<Register />}></Route>
          <Route path="/registrar/pessoas" element={<Pessoas />}></Route>
          <Route path="/home" element={<Home />}></Route>

          {/* <Route path="treinos">
            <Route path="/treino/:id" element={<Treino />} />  
          </Route> */}
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default RoutesApp;
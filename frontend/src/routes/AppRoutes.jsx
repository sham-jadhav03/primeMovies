import { Routes, Route } from "react-router-dom";
import Register from "../features/pages/auth/Register";
import Login from "../features/pages/auth/Login";
import Home from "../features/pages/movies/Home";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;

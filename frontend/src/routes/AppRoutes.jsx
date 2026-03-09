import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../features/pages/auth/Register";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default AppRoutes;

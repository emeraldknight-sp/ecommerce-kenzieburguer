import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { Login } from "../pages/Login";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

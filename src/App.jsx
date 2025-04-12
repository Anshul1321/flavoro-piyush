import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Success from "./pages/Success";
import ProtectedRoutes from "./components/ProtectedRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" 
               element={<ProtectedRoutes element={<Success />} />}
               />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
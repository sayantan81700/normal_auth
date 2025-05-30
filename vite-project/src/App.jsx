import { React } from "react";

import Register from "./components/register";
import Login from "./components/login";
import Sahoo from "./components/sahoo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Sahoo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

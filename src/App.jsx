// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

export default function App() {
  
  return (
    // <Routes>
    //   <Route path="/" element={<Login />} />
    //   <Route path="/dashboard" element={<Dashboard />} />
    // </Routes>
    <Home/>
  );
}

import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import Navbar from './pages/Navbar';
import Home from "./pages/Home";
import Hae from "./pages/See";

const App = () => (
  <div style={{ textAlign: "center" }}>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/See" element={<Hae/>} />
    </Routes>
  </div>
);

export default App
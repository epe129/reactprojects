// import './App.css';
import First from "./SecondPage.jsx";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx"
import Eapp from "./AppPageContent.jsx";


const Head = () => (
  <>
    <div style={{ textAlign: "center" }}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Eapp/>} />
        <Route path="/First" element={<First/>}/>
      </Routes>
    </div>
  </>
);

export default Head

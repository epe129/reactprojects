import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div style={{ textAlign: "none", float: "left"}}>
        <nav>
          <ul style={{ listStyleType: "none", margin: 0, padding: 0, overflow: "hidden"}}>
            <li style={{ float: "left", padding: "10px", fontSize: "2rem"}}>
              <Link style={{color: "black", textDecoration: "none"}} to="/">Home</Link>
            </li>
            <li style={{ float: "left", padding: "10px", fontSize: "2rem"}}>
              <Link style={{color: "black", textDecoration: "none"}} to="/First">page</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
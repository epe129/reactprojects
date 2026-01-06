import { Link } from "react-router-dom";

const Navbar = () => (
  <div style={{ textAlign: "center" }}>
    <nav>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li style={{ float: "left", padding: "10px"}}>
          <Link style={{color: "black", textDecoration: "none", border: "1px solid black", borderRadius: "5px", padding: "2px"}} to="/">Search movies and series</Link>
        </li>
        <li style={{ float: "left", padding: "10px"}}>
          <Link style={{color: "black", textDecoration: "none" , border: "1px solid black", borderRadius: "5px" , padding: "2px"}} to="/See">See movies and series</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar
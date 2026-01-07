import { Link } from "react-router-dom";

const Navbar = () => (
  <div style={{ textAlign: "center" }}>
    <nav>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li style={{ float: "left", padding: "10px"}}>
          <Link style={{color: "white", textDecoration: "none", border: "1px solid white", borderRadius: "5px", padding: "4px"}} to="/">Search movies and series</Link>
        </li>
        <li style={{ float: "left", padding: "10px"}}>
          <Link style={{color: "white", textDecoration: "none" , border: "1px solid white", borderRadius: "5px" , padding: "4px"}} to="/See">See movies and series</Link>
        </li>
      </ul>
    </nav>
  </div>
);
export default Navbar
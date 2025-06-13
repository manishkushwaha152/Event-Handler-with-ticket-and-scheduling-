import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#333", color: "#fff" }}>
    <div style={{ 
  display: "flex", 
  justifyContent: "space-between", 
  alignItems: "center", 
  padding: "10px", 
  backgroundColor: "#333" 
}}>
  {/* Left side links */}
  <div style={{ flex: 1 }}>
    <Link to="/" style={{ marginRight: "10px", color: "white", textDecoration: "none" }}>Home</Link>
    <Link to="/create-event" style={{ marginRight: "10px", color: "white", textDecoration: "none" }}>Create Event</Link>
    <Link to="/create-ticket" style={{ color: "white", textDecoration: "none" }}>Create Ticket</Link>
  </div>

  {/* Center link */}
  <div style={{ flex: 1, textAlign: "center" }}>
    <Link to="/search" style={{ color: "white", textDecoration: "none" }}>Search</Link>
  </div>

  {/* Right side links */}
  <div style={{ flex: 1, textAlign: "right" }}>
    <Link to="/login" style={{ marginRight: "10px", color: "white", textDecoration: "none" }}>Login</Link>
    <Link to="/register" style={{ color: "white", textDecoration: "none" }}>Register</Link>
  </div>
</div>


    </nav>
  );
}
export default Navbar;

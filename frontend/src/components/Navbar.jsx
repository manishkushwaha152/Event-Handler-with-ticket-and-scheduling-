import { Link } from "react-router-dom";
import "@/App.css";

 // Ensure this is imported if not globally done

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left side links */}
        <div className="navbar-section left">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/create-event" className="nav-link">Create Event</Link>
          <Link to="/create-ticket" className="nav-link">Create Ticket</Link>
          <Link to={`/event/${123}/book`} className="nav-link">Book Now</Link> {/* use a dummy id for now */}
          <Link to="/my-bookings" className="nav-link">My Bookings</Link>
        </div>

        {/* Center */}
        <div className="navbar-section center">
          <Link to="/search" className="nav-link">Search</Link>
        </div>

        {/* Right side */}
        <div className="navbar-section right">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/register" className="nav-link">Register</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

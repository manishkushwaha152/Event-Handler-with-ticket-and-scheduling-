import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "@/styles/Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [role, setRole] = useState(localStorage.getItem("role") || "");

  // ✅ Update role on route change
  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    const ownerToken = localStorage.getItem("ownerToken");
    const currentRole = localStorage.getItem("role");

    if ((userToken || ownerToken) && currentRole) {
      setRole(currentRole);
    } else {
      setRole("");
    }
  }, [location]);

  // ✅ Logout: clear tokens + role
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("ownerToken");
    localStorage.removeItem("role");
    localStorage.removeItem("ownerId");
    setRole("");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => navigate("/")}>
        🎫 Event Handler
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>

        {/* 👤 USER NAVBAR */}
        {role === "user" && (
          <>
            <li><Link to="/events">View Events</Link></li>
            <li><Link to="/user/book/event-ticket">Book Event</Link></li>
            <li><Link to="/user/search">Search Event</Link></li>
            <li><Link to="/user/bookings">My Bookings</Link></li>
            <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
          </>
        )}

        {/* 🧑‍💼 OWNER NAVBAR */}
        {role === "owner" && (
          <>
            <li><Link to="/owner/event">My Events</Link></li>
            <li><Link to="/create-event">Create Event</Link></li>
            <li><Link to="/owner/create-ticket">Create Ticket</Link></li>
            <li><Link to="/owner/manage-event">Manage Event</Link></li>
            <li><Link to="/owner/view-bookings">View Bookings</Link></li>
            <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
          </>
        )}

        {/* 🚪 GUEST NAVBAR */}
        {!role && (
          <>
            <li><Link to="/events">View Events</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

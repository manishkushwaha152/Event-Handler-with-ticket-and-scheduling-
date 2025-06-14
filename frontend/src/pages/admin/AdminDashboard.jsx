import { Link } from "react-router-dom";
import "../../index.css";

export default function AdminDashboard() {
  return (
    <div className="dashboard-container">
      <h2>Welcome, Admin!</h2>
      <div className="dashboard-links">
        <Link to="/admin/approve-events" className="dashboard-link">Approve Events</Link>
        <Link to="/admin/view-users" className="dashboard-link">View Users</Link>
      </div>
    </div>
  );
}

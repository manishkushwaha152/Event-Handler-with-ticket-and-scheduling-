import { Routes, Route } from "react-router-dom";

// User Pages
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import SearchEvent from "../pages/user/SearchEvent";
import BookEvent from "../pages/user/BookEvent";
import BookingList from "../pages/user/BookingList";
import UserProfile from "../pages/user/UserProfile";

// Owner Pages
import OwnerLogin from "../pages/owner/OwnerLogin";
import CreateEvent from "../pages/owner/CreateEvent";
import CreateTicket from "../pages/owner/CreateTicket";
import EventDetails from "../pages/owner/EventDetails";
import ManageEvents from "../pages/owner/ManageEvents";
import ManageTickets from "../pages/owner/ManageTickets";
import ViewBooking from "../pages/owner/ViewBooking";
import OwnerProfile from "../pages/owner/OwnerProfile";

// Admin Pages
import AdminLogin from "../pages/admin/AdminLogin";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ApproveEvents from "../pages/admin/ApproveEvents";
import ViewUsers from "../pages/admin/ViewUsers";

// Common
import Home from "../pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Common */}
      <Route path="/" element={<Home />} />

      {/* User */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/search" element={<SearchEvent />} />
      <Route path="/event/:id/book" element={<BookEvent />} />
      <Route path="/my-bookings" element={<BookingList />} />
      <Route path="/user-profile" element={<UserProfile />} />

      {/* Owner */}
      <Route path="/owner/login" element={<OwnerLogin />} />
      <Route path="/create-event" element={<CreateEvent />} />
      <Route path="/create-ticket" element={<CreateTicket />} />
      <Route path="/event/:id" element={<EventDetails />} />
      <Route path="/owner/events" element={<ManageEvents />} />
      <Route path="/owner/tickets" element={<ManageTickets />} />
      <Route path="/owner/bookings" element={<ViewBooking />} />
      <Route path="/owner/profile" element={<OwnerProfile />} />

      {/* Admin */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/approve-events" element={<ApproveEvents />} />
      <Route path="/admin/view-users" element={<ViewUsers />} />
    </Routes>
  );
}

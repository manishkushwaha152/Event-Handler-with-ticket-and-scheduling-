// AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateEvent from "../pages/CreateEvent";
import CreateTicket from "../pages/CreateTicket";
import SearchEvent from "../pages/SearchEvent";
import EventDetails from "../pages/EventDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create-event" element={<CreateEvent />} />
      <Route path="/create-ticket" element={<CreateTicket />} />
      <Route path="/search" element={<SearchEvent />} />
      <Route path="/event/:id" element={<EventDetails />} />
    </Routes>
  );
}

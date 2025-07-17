import React, { useState, useEffect } from "react";
import "@/index.css";
import api from "@/utils/api";

const UserProfile = () => {
  const [user, setUser] = useState(null); // null initially
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/users/profile");
        setUser(res.data.user);
        setBookings(res.data.bookings || []);
      } catch (err) {
        console.error("Failed to load profile", err);
        setError("Failed to load profile data");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!user) return <div className="error">No user data found</div>;

  return (
    <div className="profile-container">
      <h2 className="profile-title">User Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Mobile:</strong> {user.mobile}</p>
      </div>

      <h3 className="booking-heading">My Bookings</h3>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul className="booking-list">
          {bookings.map((booking) => (
            <li key={booking.id} className="booking-item">
              <strong>{booking.event}</strong> — {booking.ticket} — {booking.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserProfile;

import React, { useState, useEffect } from "react";
import "@/index.css"; // Adjust path if needed

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Manish Kushwaha",
    email: "manish@example.com",
    mobile: "9876543210",
  });

  const [bookings, setBookings] = useState([
    {
      id: 1,
      event: "Tech Summit",
      date: "2025-07-01",
      ticket: "VIP",
    },
    {
      id: 2,
      event: "Startup Expo",
      date: "2025-07-10",
      ticket: "General",
    },
  ]);

  // If you want to load data from backend later
  // useEffect(() => {
  //   fetchUserData();
  // }, []);

  return (
    <div className="profile-container">
      <h2 className="profile-title">User Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Mobile:</strong> {user.mobile}</p>
      </div>

      <h3 className="booking-heading">My Bookings</h3>
      <ul className="booking-list">
        {bookings.map((booking) => (
          <li key={booking.id} className="booking-item">
            <strong>{booking.event}</strong> - {booking.ticket} - {booking.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;

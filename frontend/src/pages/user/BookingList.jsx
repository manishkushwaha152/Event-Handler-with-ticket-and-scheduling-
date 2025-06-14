// src/pages/BookingList.jsx
import React from "react";
import "@/index.css"; // ✅ Import external CSS

const dummyBookings = [
  {
    id: 1,
    eventName: "React Conference 2025",
    ticketType: "VIP",
    quantity: 2,
    price: 500,
    date: "2025-06-15",
  },
  {
    id: 2,
    eventName: "Music Fest",
    ticketType: "General",
    quantity: 1,
    price: 150,
    date: "2025-06-20",
  },
];

const BookingList = () => {
  return (
    <div className="booking-container">
      <h2 className="booking-title">My Bookings</h2>
      <div>
        {dummyBookings.map((booking) => (
          <div key={booking.id} className="booking-card">
            <h3 className="event-name">{booking.eventName}</h3>
            <p>Type: {booking.ticketType}</p>
            <p>Quantity: {booking.quantity}</p>
            <p>Total Price: ₹{booking.price * booking.quantity}</p>
            <p>Date: {booking.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingList;

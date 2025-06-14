// src/owner/ViewBooking.jsx
import React from "react";
import "@/index.css"; // or your CSS path

const dummyBookings = [
  {
    id: 1,
    userName: "Manish Kumar",
    eventName: "Tech Expo 2025",
    ticketType: "VIP",
    quantity: 2,
    totalAmount: 1000,
    bookingDate: "2025-06-10",
  },
  {
    id: 2,
    userName: "Aman Verma",
    eventName: "Music Fiesta",
    ticketType: "General",
    quantity: 1,
    totalAmount: 300,
    bookingDate: "2025-06-12",
  },
];

export default function ViewBooking() {
  return (
    <div className="view-booking-container">
      <h2 className="view-booking-title">Event Bookings</h2>
      {dummyBookings.map((booking) => (
        <div key={booking.id} className="booking-card">
          <h3>{booking.eventName}</h3>
          <p><strong>Booked By:</strong> {booking.userName}</p>
          <p><strong>Ticket:</strong> {booking.ticketType}</p>
          <p><strong>Quantity:</strong> {booking.quantity}</p>
          <p><strong>Total Amount:</strong> ₹{booking.totalAmount}</p>
          <p><strong>Date:</strong> {booking.bookingDate}</p>
        </div>
      ))}
    </div>
  );
}

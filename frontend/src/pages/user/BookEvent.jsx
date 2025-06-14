// src/pages/BookEvent.jsx
import { useState } from "react";
import { useParams } from "react-router-dom";
import "@/index.css";

export default function BookEvent() {
  const { id } = useParams();

  // Dummy ticket data (replace with backend data later)
  const ticketOptions = [
    { type: "VIP", price: 500 },
    { type: "General", price: 200 },
  ];

  const [selectedTicket, setSelectedTicket] = useState(ticketOptions[0]);
  const [quantity, setQuantity] = useState(1);

  const handleBooking = () => {
    alert(
      `Booking confirmed!\nEvent ID: ${id}\nTicket: ${selectedTicket.type}\nQuantity: ${quantity}\nTotal: ₹${selectedTicket.price * quantity}`
    );
  };

  return (
    <div className="book-event-container">
  <h2>Book Tickets</h2>

  <div className="form-group">
    <label>Select Ticket Type</label>
    <select
      value={selectedTicket.type}
      onChange={(e) =>
        setSelectedTicket(ticketOptions.find((ticket) => ticket.type === e.target.value))
      }
    >
      {ticketOptions.map((ticket) => (
        <option key={ticket.type} value={ticket.type}>
          {ticket.type} - ₹{ticket.price}
        </option>
      ))}
    </select>
  </div>

  <div className="form-group">
    <label>Quantity</label>
    <input
      type="number"
      min="1"
      value={quantity}
      onChange={(e) => setQuantity(parseInt(e.target.value))}
    />
  </div>

  <div className="total-price">
    Total Price: ₹{selectedTicket.price * quantity}
  </div>

  <button className="book-btn" onClick={handleBooking}>
    Book Now
  </button>

  <a
    href="https://maps.google.com?q=Your+Event+Location"
    target="_blank"
    rel="noopener noreferrer"
    className="map-link"
  >
    View Location on Google Maps
  </a>
</div>

  );
}

// src/pages/owner/ManageTickets.jsx
import { useState } from "react";
import "../../index.css"; // Adjust path if needed

const dummyTickets = [
  {
    id: 1,
    eventName: "Tech Conference 2025",
    type: "VIP",
    price: 1000,
    quantity: 50,
  },
  {
    id: 2,
    eventName: "Tech Conference 2025",
    type: "General",
    price: 300,
    quantity: 200,
  },
  {
    id: 3,
    eventName: "Startup Pitch Fest",
    type: "Early Bird",
    price: 150,
    quantity: 100,
  },
];

export default function ManageTickets() {
  const [tickets, setTickets] = useState(dummyTickets);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this ticket?")) {
      setTickets(tickets.filter((ticket) => ticket.id !== id));
    }
  };

  const handleEdit = (id) => {
    alert(`Edit logic for ticket ID ${id} goes here`);
  };

  return (
    <div className="manage-tickets-container">
      <h2 className="title">Manage Tickets</h2>
      {tickets.length === 0 ? (
        <p>No tickets available.</p>
      ) : (
        <div className="ticket-list">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="ticket-card">
              <h3>{ticket.eventName}</h3>
              <p><strong>Type:</strong> {ticket.type}</p>
              <p><strong>Price:</strong> ₹{ticket.price}</p>
              <p><strong>Quantity:</strong> {ticket.quantity}</p>
              <div className="button-group">
                <button className="edit-btn" onClick={() => handleEdit(ticket.id)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(ticket.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

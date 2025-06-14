import { useState } from "react";
import "@/index.css"; // optional if you want a dedicated CSS file

export default function CreateTicket() {
  const [ticketData, setTicketData] = useState({
    eventId: "",
    type: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setTicketData({ ...ticketData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Ticket created (dummy):\n" + JSON.stringify(ticketData, null, 2));
  };

  return (
    <div className="create-ticket-container">
      <h2 className="create-ticket-title">Create Ticket</h2>
      <form onSubmit={handleSubmit} className="create-ticket-form">
        <input
          type="text"
          name="eventId"
          placeholder="Event ID"
          className="form-input"
          value={ticketData.eventId}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="type"
          placeholder="Ticket Type (e.g. VIP, Regular)"
          className="form-input"
          value={ticketData.type}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="form-input"
          value={ticketData.price}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="quantity"
          placeholder="Available Quantity"
          className="form-input"
          value={ticketData.quantity}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-button">
          Submit Ticket
        </button>
      </form>
    </div>
  );
}

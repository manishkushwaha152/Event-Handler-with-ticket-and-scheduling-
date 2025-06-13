import { useState } from "react";

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
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Create Ticket</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="eventId"
          placeholder="Event ID"
          className="w-full p-2 border rounded"
          value={ticketData.eventId}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="type"
          placeholder="Ticket Type (e.g. VIP, Regular)"
          className="w-full p-2 border rounded"
          value={ticketData.type}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full p-2 border rounded"
          value={ticketData.price}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="quantity"
          placeholder="Available Quantity"
          className="w-full p-2 border rounded"
          value={ticketData.quantity}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Submit Ticket
        </button>
      </form>
    </div>
  );
}

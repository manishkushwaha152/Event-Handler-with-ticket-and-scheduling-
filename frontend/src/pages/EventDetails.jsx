import { useParams } from "react-router-dom";
import { useState } from "react";

export default function EventDetails() {
  const { id } = useParams();

  // Dummy ticket data
  const ticketTypes = [
    { type: "VIP", price: 500 },
    { type: "General", price: 200 },
    { type: "Student", price: 100 },
  ];

  const [selectedType, setSelectedType] = useState(ticketTypes[0].type);
  const [quantity, setQuantity] = useState(1);

  const handleBooking = () => {
    alert(`Booking Confirmed!\n\nEvent ID: ${id}\nType: ${selectedType}\nQuantity: ${quantity}`);
  };

  const handleMapClick = () => {
    const dummyLat = 28.6139; // New Delhi latitude
    const dummyLng = 77.2090; // New Delhi longitude
    window.open(`https://www.google.com/maps?q=${dummyLat},${dummyLng}`, "_blank");
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Event Details - #{id}</h1>

      <p className="mb-2">📍 Location: Pragati Maidan, Delhi</p>
      <button
        onClick={handleMapClick}
        className="mb-4 text-blue-600 underline hover:text-blue-800"
      >
        View on Google Maps
      </button>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Ticket Type</label>
        <select
          className="w-full p-2 border rounded"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          {ticketTypes.map((ticket, index) => (
            <option key={index} value={ticket.type}>
              {ticket.type} - ₹{ticket.price}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Quantity</label>
        <input
          type="number"
          min="1"
          max="10"
          className="w-full p-2 border rounded"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <button
        onClick={handleBooking}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Book Now
      </button>
    </div>
  );
}

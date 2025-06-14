import { useParams } from "react-router-dom";
import { useState } from "react";
import "@/index.css"; // ✅ Import CSS file

export default function EventDetails() {
  const { id } = useParams();

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
    const dummyLat = 28.6139;
    const dummyLng = 77.2090;
    window.open(`https://www.google.com/maps?q=${dummyLat},${dummyLng}`, "_blank");
  };

  return (
    <div className="event-details-container">
      <h1 className="event-details-title">Event Details - #{id}</h1>

      <p className="event-location">📍 Location: Pragati Maidan, Delhi</p>
      <button onClick={handleMapClick} className="map-link-button">
        View on Google Maps
      </button>

      <div className="form-group">
        <label className="form-label">Ticket Type</label>
        <select
          className="form-input"
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

      <div className="form-group">
        <label className="form-label">Quantity</label>
        <input
          type="number"
          min="1"
          max="10"
          className="form-input"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <button onClick={handleBooking} className="book-now-button">
        Book Now
      </button>
    </div>
  );
}

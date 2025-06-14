import { useState } from "react";
import "@/index.css"; // Optional if using separate CSS module

export default function CreateEvent() {
  const [eventData, setEventData] = useState({
    name: "",
    type: "",
    description: "",
    city: "",
    priceRange: "",
    mobile: "",
    address: "",
    geoLocation: "",
  });

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Event created (dummy):\n" + JSON.stringify(eventData, null, 2));
  };

  return (
    <div className="create-event-container">
      <h1 className="create-event-title">Create New Event</h1>

      <form onSubmit={handleSubmit} className="create-event-form">
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          className="form-input"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="type"
          placeholder="Event Type (e.g. Concert, Seminar)"
          className="form-input"
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Event Description"
          rows="4"
          className="form-input"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          className="form-input"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="priceRange"
          placeholder="Price Range (e.g. ₹200-₹1000)"
          className="form-input"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="mobile"
          placeholder="Contact Mobile Number"
          className="form-input"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Full Address"
          className="form-input"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="geoLocation"
          placeholder="Google Geo Location Link"
          className="form-input"
          onChange={handleChange}
        />

        <button type="submit" className="submit-button">
          Submit Event
        </button>
      </form>
    </div>
  );
}

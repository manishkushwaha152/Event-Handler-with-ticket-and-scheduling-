import { useState } from "react";

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
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Create New Event</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="type"
          placeholder="Event Type (e.g. Concert, Seminar)"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Event Description"
          rows="4"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="priceRange"
          placeholder="Price Range (e.g. ₹200-₹1000)"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="mobile"
          placeholder="Contact Mobile Number"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Full Address"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="geoLocation"
          placeholder="Google Geo Location Link"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Event
        </button>
      </form>
    </div>
  );
}

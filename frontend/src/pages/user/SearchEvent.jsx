import { useState } from "react";
import "@/index.css"; // ✅ Import your CSS file

const dummyEvents = [
  {
    id: 1,
    name: "Music Fest 2025",
    city: "Delhi",
    area: "Connaught Place",
    date: "2025-07-21",
    price: "₹999",
    image: "https://via.placeholder.com/300x150"
  },
  {
    id: 2,
    name: "Startup Expo",
    city: "Mumbai",
    area: "Bandra",
    date: "2025-07-24",
    price: "₹499",
    image: "https://via.placeholder.com/300x150"
  }
];

export default function SearchEvent() {
  const [search, setSearch] = useState("");

  const filteredEvents = dummyEvents.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase()) ||
    event.city.toLowerCase().includes(search.toLowerCase()) ||
    event.area.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="search-container">
      <h1 className="search-title">Search Events</h1>

      <input
        type="text"
        placeholder="Search by name, city or area..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="event-grid">
        {filteredEvents.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.name} className="event-image" />
            <h2 className="event-name">{event.name}</h2>
            <p className="event-location">{event.area}, {event.city}</p>
            <p className="event-date">Date: {event.date}</p>
            <p className="event-price">Price: {event.price}</p>
            <button className="view-button">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

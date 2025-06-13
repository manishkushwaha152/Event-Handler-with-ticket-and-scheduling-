import { useState } from "react";

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
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Search Events</h1>

      <input
        type="text"
        placeholder="Search by name, city or area..."
        className="w-full p-2 border rounded mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="border rounded shadow p-4">
            <img src={event.image} alt={event.name} className="mb-3 w-full" />
            <h2 className="text-lg font-semibold">{event.name}</h2>
            <p>{event.area}, {event.city}</p>
            <p>Date: {event.date}</p>
            <p>Price: {event.price}</p>
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

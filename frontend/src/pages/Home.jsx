import "@/index.css";

const dummyEvents = [
  {
    id: 1,
    name: "Tech Conference 2025",
    type: "Conference",
    city: "Mumbai",
    priceRange: "₹500 - ₹1500",
    image: "https://picsum.photos/300/150",
  },
  {
    id: 2,
    name: "Music Fest",
    type: "Concert",
    city: "Delhi",
    priceRange: "₹800 - ₹2500",
    image: "https://picsum.photos/300/150",
  },
];

function Home() {
  return (
    <div className="event-list">
      <h2 className="event-heading">Upcoming Events</h2>
      <div className="events-grid">
        {dummyEvents.map(event => (
          <div className="event-card" key={event.id}>
            <img src={event.image} alt={event.name} />
            <h3>{event.name}</h3>
            <p>Type: {event.type}</p>
            <p>City: {event.city}</p>
            <p>{event.priceRange}</p>
            <button className="details-btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

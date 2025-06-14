// src/pages/owner/ManageEvents.jsx
import { useState } from "react";
import "../../index.css"; // Adjust if needed based on your CSS structure

const dummyEvents = [
  {
    id: 1,
    name: "Tech Conference 2025",
    date: "2025-07-01",
    location: "Mumbai",
    status: "Approved",
  },
  {
    id: 2,
    name: "Startup Pitch Fest",
    date: "2025-07-10",
    location: "Delhi",
    status: "Pending",
  },
];

export default function ManageEvents() {
  const [events, setEvents] = useState(dummyEvents);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this event?");
    if (confirmDelete) {
      setEvents(events.filter((event) => event.id !== id));
    }
  };

  const handleEdit = (id) => {
    alert(`Edit event with ID: ${id} (Add your own logic here)`);
  };

  return (
    <div className="manage-events-container">
      <h2 className="title">Manage My Events</h2>
      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <div className="event-list">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <h3>{event.name}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Status:</strong> {event.status}</p>
              <div className="button-group">
                <button className="edit-btn" onClick={() => handleEdit(event.id)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(event.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

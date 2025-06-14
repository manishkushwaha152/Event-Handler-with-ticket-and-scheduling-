import "../../index.css";

const dummyEvents = [
  { id: 1, name: "Music Festival", status: "Pending" },
  { id: 2, name: "Tech Summit", status: "Pending" },
];

export default function ApproveEvents() {
  const handleApprove = (id) => {
    alert(`Event ${id} approved!`);
    // TODO: Update backend with approval
  };

  return (
    <div className="admin-section">
      <h2>Pending Events</h2>
      {dummyEvents.map((event) => (
        <div key={event.id} className="admin-card">
          <h3>{event.name}</h3>
          <p>Status: {event.status}</p>
          <button onClick={() => handleApprove(event.id)}>Approve</button>
        </div>
      ))}
    </div>
  );
}

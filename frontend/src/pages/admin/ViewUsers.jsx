import "../../index.css";

const dummyUsers = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

export default function ViewUsers() {
  return (
    <div className="admin-section">
      <h2>Registered Users</h2>
      {dummyUsers.map((user) => (
        <div key={user.id} className="admin-card">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ))}
    </div>
  );
}

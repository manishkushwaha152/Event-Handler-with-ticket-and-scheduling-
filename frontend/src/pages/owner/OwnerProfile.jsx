// src/pages/owner/OwnerProfile.jsx
import { useState, useEffect } from "react";
import "../../index.css"; // Update path as needed

export default function OwnerProfile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    organization: "",
  });

  // Simulate fetch profile data on component mount
  useEffect(() => {
    // TODO: Replace with API call later
    const dummyData = {
      name: "Manish Kumar",
      email: "owner@example.com",
      organization: "Event Masters Inc.",
    };
    setProfile(dummyData);
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // TODO: send updated profile to backend
    alert("Profile updated!");
    console.log("Updated Profile:", profile);
  };

  return (
    <div className="profile-container">
      <h2 className="title">Owner Profile</h2>
      <form onSubmit={handleUpdate} className="profile-form">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          required
        />

        <label>Organization:</label>
        <input
          type="text"
          name="organization"
          value={profile.organization}
          onChange={handleChange}
        />

        <button type="submit" className="update-btn">Update Profile</button>
      </form>
    </div>
  );
}

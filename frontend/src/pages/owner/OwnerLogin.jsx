// src/pages/owner/OwnerLogin.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css"; // Update if your styles are in a different path

export default function OwnerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login validation (replace with actual API call later)
    if (email === "owner@example.com" && password === "password") {
      alert("Login successful!");
      navigate("/owner/profile"); // Redirect to profile after login
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="title">Owner Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
}

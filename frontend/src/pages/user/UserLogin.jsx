import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "@/utils/api";
import "@/styles/UserAuth.css"; // Make sure this is correct

export default function UserLogin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const redirect = new URLSearchParams(location.search).get("redirect") || "/";

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/auth/user/login", formData);
      localStorage.setItem("userToken", res.data.token);
      localStorage.setItem("role", "user");
      localStorage.setItem("userId", res.data.user._id);
      alert("✅ Login successful!");
      navigate(redirect); // 🔁 Go to redirected page after login
    } catch (err) {
      console.error("Login Error:", err);
      alert("❌ Login failed: " + (err.response?.data?.message || "Unknown error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">User Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          className="auth-input"
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
          required
        />
        <input
          className="auth-input"
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className={`auth-button ${loading ? "loading" : ""}`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

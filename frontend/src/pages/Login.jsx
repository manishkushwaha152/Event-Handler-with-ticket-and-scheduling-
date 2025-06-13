import { useState } from "react";

export default function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", loginData);
    // TODO: send to backend
  };

  return (
    <div className="login-container">
      <h2>User Login</h2>
      <form onSubmit={handleSubmit} className="form-box">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={loginData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

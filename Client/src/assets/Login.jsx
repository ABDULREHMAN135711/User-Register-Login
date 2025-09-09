import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      await axios.post("http://localhost:5000/login", formData);
      alert("Login successful!");
      navigate("/Home");
    } catch (error) {
      alert("Login failed!");
      console.error(error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat, linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.3)",
          borderRadius: "20px",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          padding: "2rem",
          width: "350px",
          textAlign: "center",
          position: "relative",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.18)"
        }}
      >
        {/* SVG Graphic */}
        <svg
          width="60"
          height="60"
          viewBox="0 0 24 24"
          fill="none"
          style={{ marginBottom: "1rem" }}
        >
          <circle cx="12" cy="12" r="10" fill="#185a9d" opacity="0.2" />
          <path
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            fill="#43cea2"
          />
        </svg>
        <h1 style={{ fontWeight: "bold", color: "#185a9d" }}>Login Page</h1>
        <p style={{ color: "#43cea2" }}>Welcome back! Please login to continue.</p>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem", textAlign: "left" }}>
            <label htmlFor="email"><strong>Email</strong></label>
            <input
              type="email"
              placeholder=" Enter email"
              autoComplete="off"
              name="email"
              className="form-control"
              style={{ borderRadius: "8px", marginTop: "0.3rem", marginLeft: "2rem" }}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginBottom: "1rem", textAlign: "left" }}>
            <label htmlFor="password"><strong>Password</strong></label>
            <input
              type="password"
              placeholder=" Enter password"
              autoComplete="off"
              name="password"
              className="form-control"
              style={{ borderRadius: "8px", marginTop: "0.3rem", marginLeft: "0.3rem" }}
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            style={{
              background: "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "0.5rem",
              width: "100%",
              fontWeight: "bold",
              marginBottom: "1rem"
            }}
          >
            Login
          </button>
          <p style={{ marginBottom: "0.5rem" }}>Don't have an account?</p>
          <Link
            to="/register"
            style={{
              display: "block",
              background: "#fff",
              color: "#185a9d",
              borderRadius: "8px",
              padding: "0.5rem",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Register
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
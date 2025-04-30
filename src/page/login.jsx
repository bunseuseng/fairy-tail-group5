import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/images/background.png";
import axios from "axios";

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Toggle between local or live backend
  const API_URL = "http://localhost:1337/api/auth/local"; // Change to live if needed
  // const API_URL = "http://62.72.46.248:1337/api/auth/local";

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(API_URL, {
        identifier,
        password,
      });

      // Save token or user info if needed
      // localStorage.setItem("token", response.data.jwt);
      // localStorage.setItem("user", JSON.stringify(response.data.user));

      // Redirect to homepage
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      const errorMsg =
        error.response?.data?.error?.message ||
        error.response?.data?.message ||
        error.message;
      setMessage(`Login failed: ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen p-4 bg-gray-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white bg-opacity-95 p-8 rounded-2xl shadow-2xl w-full max-w-md backdrop-blur-sm">
        <h2 className="text-3xl font-extrabold text-center text-purple-800 mb-6">
          Login
        </h2>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-purple-700 text-white py-2 rounded-md font-medium transition-all duration-200 ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-800"
            }`}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-red-600">{message}</p>
        )}

        <div className="flex justify-between items-center mt-6 text-sm text-purple-700">
          <a href="#" className="hover:underline">
            Create an Account
          </a>
          <a href="#" className="hover:underline">
            Forgot Password?
          </a>
        </div>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">OR</span>
          </div>
        </div>

        {/* Optional: Add social login buttons below */}
      </div>
    </div>
  );
};

export default Login;

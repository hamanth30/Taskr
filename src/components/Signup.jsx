import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful");
        // You can redirect or store auth token here
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      alert("An error occurred while signing up");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-emerald-200">
      <div className="bg-emerald-300 p-8 rounded-lg shadow-lg w-96">
        <div className="text-2xl font-semibold text-center mb-8">
          Taskr Signup
        </div>

        <div className="flex items-center mb-6">
          <FaEnvelope className="text-gray-600 mr-2 text-xl" />
          <div className="flex-grow">
            <h2 className="text-lg font-medium mb-2">Email</h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center mb-6">
          <FaLock className="text-gray-600 mr-2 text-xl" />
          <div className="flex-grow">
            <h2 className="text-lg font-medium mb-2">Password</h2>
            <input
              type="password"
              placeholder="Enter the password"
              className="w-full px-4 py-2 border bg-white rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="text-center">
          <button
            className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600"
            onClick={handleSignup}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

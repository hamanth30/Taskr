import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-emerald-200">
      <div className="bg-emerald-300 p-8 rounded-lg shadow-lg w-96">
        <div className="text-2xl font-semibold text-center mb-8">
          Taskr Login
        </div>

        {/* Email Input */}
        <div className="flex items-center mb-6">
          <FaEnvelope className="text-gray-600 mr-2 text-xl" />
          <div className="flex-grow">
            <h2 className="text-lg font-medium mb-2">Email</h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg bg-white"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="flex items-center mb-6">
          <FaLock className="text-gray-600 mr-2 text-xl" />
          <div className="flex-grow">
            <h2 className="text-lg font-medium mb-2">Password</h2>
            <input
              type="password"
              placeholder="Enter the password"
              className="w-full px-4 py-2 border bg-white rounded-lg"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
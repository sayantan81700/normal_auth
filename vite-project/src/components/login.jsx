import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handelOnsubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError(" all field are required");
      return;
    }
    setError();
    axios
      .post("http://localhost:5000/api/login", { email, password })
      .then(() => {
        navigate("/home");
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.message) {
          setError(err.response.data.message);
        } else {
          setError("An unexpected error occurred"); // ✅ Fix typo
        }
      });
  };

  return (
    <div className="flex justify-center items-center bg-gray-600 h-screen">
      <div className="bg-white p-6 rounded w-1/4">
        <h2 className="text-2xl font-bold mb-4">login</h2>
        <form onSubmit={handelOnsubmit}>
          {" "}
          {/* ✅ Fix function name */}
          <div className="mb-4">
            <label htmlFor="email" className="font-semibold block mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="font-semibold block mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <div className="text-red-600 text-center mb-4">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4">not Have an Account?</p>
        <Link
          to="/register"
          className="block w-full text-center bg-gray-100 text-black mt-2 py-2 rounded hover:bg-gray-200"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;

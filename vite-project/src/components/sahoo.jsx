import React, { useState, useEffect } from "react";
import axios from "axios";

const Sahoo = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/home"); // Ensure this endpoint is correct!
        setUser(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        <div className="flex gap-80">
          <div>
            <h1 className="font-extrabold bg-blue-900 text-3xl text-white rounded-md mx-3.5 px-2.5">
              {" "}
              name
            </h1>
          </div>
          <div>
            <h1 className="font-extrabold bg-blue-900 text-3xl text-white rounded-md px-2.5">
              {" "}
              email
            </h1>
          </div>
        </div>
        {users.map((user) => (
          <li key={user._id}>
            <div className="flex gap-80 items-start">
              <div>
                <div>
                  <strong className="">{user.name ?? "Unknown User"}</strong>
                </div>
              </div>
              <div>
                <div className="">{user.email ?? "No Email Provided"}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sahoo;

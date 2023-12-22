//import React, useState, useEffect and axios
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

//UserList function that houses the fetchData function
const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    /* fetchData function that fetches data from the given API */
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setListOfUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="user-list">
      <ul>
        {listOfUsers.map((user) => (
          <li
            key={user.id}
            style={{
              listStyleType: "square",
              textAlign: "justify",
              fontSize: "120%",
            }}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

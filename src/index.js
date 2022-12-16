import React, { useSyncExternalStore } from "react";
import ReactDOM from "react-dom/client";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

const users = [
  {
    id: 1,
    name: "Ryan Ray",
    image: "https://robohash.org/user1",
  },
  {
    id: 1,
    name: "Joe",
    image: "https://robohash.org/user2",
  },
  {
    id: 3,
    name: "Marcos",
    image: "https://robohash.org/user3",
  },
];

root.render(
  <>
    {users.map((user, index) => {
      return (
        <div key={index}>
          <h1>{user.name}</h1>
          <img src={user.image} />
        </div>
      );
    })}
  </>
);

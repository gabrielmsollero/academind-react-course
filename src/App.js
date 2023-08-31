import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  function addUserHandler(newUser) {
    newUser.key = Math.random().toString();
    setUsers((prevUsers) => [newUser, ...prevUsers]);
  }

  return (
    <>
      <AddUser onSubmit={addUserHandler} />
      {users.length > 0 ? (
        <UsersList users={users} />
      ) : (
        <p style={{ textAlign: "center", color: 'white' }}>No users registered yet.</p>
      )}
    </>
  );
}

export default App;

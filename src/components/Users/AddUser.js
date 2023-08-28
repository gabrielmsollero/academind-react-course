import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const defaultUserInput = {
  name: "",
  age: "",
};

function AddUser(props) {
  const [userInput, setUserInput] = useState(defaultUserInput);
  const [errorMsg, setErrorMsg] = useState("");

  function inputChangedHandler(event) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [event.target.id]: event.target.value,
      };
    });
  }

  function addUserHandler(event) {
    event.preventDefault();

    /* The code below would work for any number of inputs, 
     * and would automatically validate if we decided to
     * insert new fields in the form.
     */
    if (
      Object.values(userInput)
        .map((input) => input.trim().length)
        .includes(0)
    ) {
      setErrorMsg("There are empty fields!");
      return;
    }

    if (+userInput.age <= 0) {
      setErrorMsg("Age may not be < 0!");
      return;
    }

    props.onSubmit(userInput);
    setUserInput(defaultUserInput);
  }

  function errDismissHandler() {
    setErrorMsg(null);
  }

  return (
    <div>
      {errorMsg && (
        <ErrorModal msg={errorMsg} onDismissed={errDismissHandler} />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <p>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              id="name"
              value={userInput.name}
              onChange={inputChangedHandler}
            />
          </p>
          <p>
            <label htmlFor="age">Age (Years)</label>
            <input
              type="number"
              // min="0"
              id="age"
              value={userInput.age}
              onChange={inputChangedHandler}
            />
          </p>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;

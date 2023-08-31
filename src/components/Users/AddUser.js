import React, { useState, useRef } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import styles from "./AddUser.module.css";

const defaultUserInput = {
  name: "",
  age: "",
};

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [errorMsg, setErrorMsg] = useState("");

  function addUserHandler(event) {
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    event.preventDefault();

    if ([enteredName.length, enteredAge.length].includes(0)) {
      setErrorMsg("There are empty fields!");
      return;
    }

    if (enteredAge <= 0) {
      setErrorMsg("Age may not be < 0!");
      return;
    }

    props.onSubmit({ name: enteredName, age: enteredAge });

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  }

  function errDismissHandler() {
    setErrorMsg(null);
  }

  return (
    <>
      {errorMsg && (
        <ErrorModal msg={errorMsg} onDismissed={errDismissHandler} />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <p>
            <label htmlFor="name">Username</label>
            <input type="text" id="name" ref={nameInputRef} />
          </p>
          <p>
            <label htmlFor="age">Age (Years)</label>
            <input
              type="number"
              // min="0"
              id="age"
              ref={ageInputRef}
            />
          </p>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;

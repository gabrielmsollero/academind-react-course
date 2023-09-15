import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [inputIsValid, setInputIsValid] = useState(false);
  const [inputTouched, setInputTouched] = useState(false);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    if (event.target.value.trim() !== "") {
      setInputIsValid(true);
      return;
    }
  };

  const nameInputBlurHandler = (event) => {
    setInputTouched(true);

    if (enteredName.trim() === "") {
      setInputIsValid(false);
      return;
    }
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setInputTouched(true);

    if (enteredName.trim() === "") {
      setInputIsValid(false);
      return;
    }

    setInputIsValid(true);

    const enteredValue = nameInputRef.current.value;

    setEnteredName("");
  };

  const showError = !inputIsValid && inputTouched;

  const nameInputClasses = showError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {showError && <p className="error-text">Name must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const nameIsValid = enteredName.trim() !== '';
  const showNameError = !nameIsValid && nameTouched;

  const emailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@');
  const showEmailError = !emailIsValid && emailTouched;

  let formIsValid = nameIsValid && emailIsValid;
  
  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setNameTouched(true);
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEmailTouched(true);
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setNameTouched(true);
    setEmailTouched(true);

    if (!formIsValid) {
      return;
    }

    setEnteredName("");
    setNameTouched(false);

    setEnteredEmail("");
    setEmailTouched(false);
  };

  const nameInputClasses = showNameError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = showEmailError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {showNameError && <p className="error-text">Name must not be empty!</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {showEmailError && <p className="error-text">Email is not valid!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

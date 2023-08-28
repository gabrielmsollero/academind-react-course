import React, { useState } from "react";

import styles from './InvestmentForm.module.css'

function InvestmentForm(props) {
  const [currSavings, setCurrSavings] = useState(0);
  const [yrlySavings, setYrlySavings] = useState(0);
  const [interest, setInterest] = useState(0);
  const [duration, setDuration] = useState(0);

  function calcYrlyData() {
    const yearlyData = [];
    
    // The below code calculates yearly results (total savings, interest etc)
    let savings = currSavings;
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = savings * (interest / 100);
      savings += yearlyInterest + yrlySavings;
      yearlyData.push({
        year: i + 1,
        yrlyInterest: yearlyInterest,
        savingsEndOfYear: savings,
        yrlySavings: yrlySavings,
      });
    }

    return yearlyData;
  };
  
  function changeInputState(id, value) {
    const handlerMap = {
      "current-savings": setCurrSavings,
      "yearly-contribution": setYrlySavings,
      "expected-return": setInterest,
      "duration": setDuration,
    };

    handlerMap[id](+value);
  }

  function inputChangeHandler(event) {
    changeInputState(event.target.id, event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    
    const newYrlyData = calcYrlyData();
    props.onSubmit(newYrlyData);
  }

  function resetHandler() {
    setCurrSavings("");
    setYrlySavings("");
    setInterest("");
    setDuration("");
    props.onReset();
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currSavings || ''}
            onChange={inputChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yrlySavings || ''}
            onChange={inputChangeHandler}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={interest || ''}
            onChange={inputChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={duration || ''}
            onChange={inputChangeHandler}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button type="reset" className={styles.buttonAlt} onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}

export default InvestmentForm;

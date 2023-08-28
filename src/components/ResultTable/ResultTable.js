import React, { useState } from "react";

import ResultTableRow from "./ResultTableRow";

import styles from "./ResultTable.module.css";

function ResultTable(props) {
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const initialInvestment =
    props.rows[0].savingsEndOfYear -
    props.rows[0].yrlyInterest -
    props.rows[0].yrlySavings;

  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.rows.map((item) => {
          return (
            <ResultTableRow
              key={item.year}
              year={item.year}
              yrlyInterest={currencyFormatter.format(item.yrlyInterest)}
              savingsEndOfYear={currencyFormatter.format(item.savingsEndOfYear)}
              totalInterest={currencyFormatter.format(
                item.savingsEndOfYear -
                  item.year * item.yrlySavings -
                  initialInvestment
              )}
              totalInvestment={currencyFormatter.format(
                initialInvestment + item.year * item.yrlySavings
              )}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default ResultTable;

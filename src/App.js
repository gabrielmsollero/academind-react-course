import React, { useState } from "react";

import Header from "./components/Header/Header";
import InvestmentForm from "./components/InvestmentForm/InvestmentForm";
import ResultTable from "./components/ResultTable/ResultTable";

function App() {
  const [yrlyData, setYrlyData] = useState([]);

  function investmentSubmitHandler(data) {
    setYrlyData(data);
  }

  function investmentResetHandler() {
    setYrlyData([]);
  }

  return (
    <div>
      <Header />
      <InvestmentForm
        onSubmit={investmentSubmitHandler}
        onReset={investmentResetHandler}
      />

      {yrlyData.length > 0 ? (
        <ResultTable rows={yrlyData} />
      ) : (
        <p style={{textAlign: 'center'}}>No results yet.</p>
      )}
    </div>
  );
}

export default App;

function ResultTableRow(props) {
  return (
    <tr>
      <td>{props.year}</td>
      <td>{props.savingsEndOfYear}</td>
      <td>{props.yrlyInterest}</td>
      <td>{props.totalInterest}</td>
      <td>{props.totalInvestment}</td>
    </tr>
  );
}

export default ResultTableRow;
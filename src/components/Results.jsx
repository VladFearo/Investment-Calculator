import { calculateInvestmentResults, formatter } from "../util/investment.js";

function Results({ userInput }) {
  const { format } = formatter;
  const annualData = calculateInvestmentResults(userInput);

  const initialInvestment =
    annualData[0].valueEndOfYear -
    annualData[0].interest -
    annualData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Interest Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((data) => {
          const totalInterest =
            data.valueEndOfYear -
            initialInvestment -
            data.annualInvestment * data.year;
          const totalAmountInvested =
            initialInvestment + data.annualInvestment * data.year;
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{format(data.valueEndOfYear)}</td>
              <td>{format(data.interest)}</td>
              <td>{format(totalInterest)}</td>
              <td>{format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Results;

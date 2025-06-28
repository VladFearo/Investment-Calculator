function UserInput({ userInput, onInputChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            type="number"
            id="initial-investment"
            name="initialInvestment"
            value={userInput.initialInvestment}
            onChange={onInputChange}
            required
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            type="number"
            id="annual-investment"
            name="annualInvestment"
            value={userInput.annualInvestment}
            onChange={onInputChange}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            type="number"
            id="expected-return"
            name="expectedReturn"
            value={userInput.expectedReturn}
            onChange={onInputChange}
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={userInput.duration}
            onChange={onInputChange}
            required
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;

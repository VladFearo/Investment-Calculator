import { useState } from "react";

function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
            required
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;

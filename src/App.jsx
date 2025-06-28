import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: +value,
    }));
  };
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onInputChange={handleInputChange} />
      {inputIsValid ? (
        <Results userInput={userInput} />
      ) : (
        <p className="center">Please enter a valid duration.</p>
      )}
    </>
  );
}

export default App;

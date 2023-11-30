import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

const Counter: React.FC = () => {
  const [inputValue, setInputValue] = useState<number>(1);
  const { result, addHandler, subtractHandler, multiplicationHandler, divisionHandler } = useCounter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  };

  return (
    <>
      <p>Result: {result}</p>
      <input type="number" value={inputValue} onChange={handleChange} />
      <button onClick={() => addHandler(inputValue)}>+</button>
      <button onClick={() => subtractHandler(inputValue)}>-</button>
      <button onClick={() => multiplicationHandler(inputValue)}>x</button>
      <button onClick={() => divisionHandler(inputValue)}>%</button>
    </>
  );
};

export default Counter;

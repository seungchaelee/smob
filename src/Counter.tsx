import React, { useState } from "react";
import useCounter from "./hooks/useCounter";

const Counter: React.FC = () => {
  const [inputValue, setInputValue] = useState<number>(1);
  const { result, handleAdd, handleSubtract, hanldeMultiplication, hanldeDivision } = useCounter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  };

  return (
    <>
      <p>Result: {result}</p>
      <input type="number" value={inputValue} onChange={handleChange} />
      <button onClick={() => handleAdd(inputValue)}>+</button>
      <button onClick={() => handleSubtract(inputValue)}>-</button>
      <button onClick={() => hanldeMultiplication(inputValue)}>x</button>
      <button onClick={() => hanldeDivision(inputValue)}>%</button>
    </>
  );
};

export default Counter;

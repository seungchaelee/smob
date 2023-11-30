import { useState, useCallback } from "react";

interface CounterProps {
  result: number;
  handleAdd: (value: number) => void;
  handleSubtract: (value: number) => void;
  hanldeMultiplication: (value: number) => void;
  hanldeDivision: (value: number) => void;
}

const useCounter = (): CounterProps => {
  const [result, setResult] = useState<number>(0);

  const handleAdd = useCallback((value: number) => {
    setResult((prevResult) => prevResult + value);
  }, []);

  const handleSubtract = useCallback((value: number) => {
    setResult((prevResult) => prevResult - value);
  }, []);

  const hanldeMultiplication = useCallback((value: number) => {
    setResult((prevResult) => prevResult * value);
  }, []);

  const hanldeDivision = useCallback((value: number) => {
    setResult((prevResult) => prevResult / value);
  }, []);

  return {
    result,
    handleAdd,
    handleSubtract,
    hanldeMultiplication,
    hanldeDivision,
  };
};

export default useCounter;

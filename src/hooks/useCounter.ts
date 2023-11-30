import { useState, useCallback } from "react";

interface CounterProps {
  result: number;
  handleAdd: (value: number) => void;
  handleSubtract: (value: number) => void;
}

const useCounter = (): CounterProps => {
  const [result, setResult] = useState<number>(0);

  const handleAdd = useCallback((value: number) => {
    setResult((prevResult) => prevResult + value);
  }, []);

  const handleSubtract = useCallback((value: number) => {
    setResult((prevResult) => prevResult - value);
  }, []);

  return {
    result,
    handleAdd,
    handleSubtract,
  };
};

export default useCounter;

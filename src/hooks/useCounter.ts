import { useState, useCallback } from "react";

interface CounterProps {
  result: number;
  addHandler: (value: number) => void;
  subtractHandler: (value: number) => void;
  multiplicationHandler: (value: number) => void;
  divisionHandler: (value: number) => void;
}

const useCounter = (): CounterProps => {
  const [result, setResult] = useState<number>(0);

  const addHandler = useCallback((value: number) => {
    setResult((prevResult) => prevResult + value);
  }, []);

  const subtractHandler = useCallback((value: number) => {
    setResult((prevResult) => prevResult - value);
  }, []);

  const multiplicationHandler= useCallback((value: number) => {
    setResult((prevResult) => prevResult * value);
  }, []);

  const divisionHandler = useCallback((value: number) => {
    setResult((prevResult) => prevResult / value);
  }, []);

  return {
    result,
    addHandler,
    subtractHandler,
    multiplicationHandler,
    divisionHandler,
  };
};

export default useCounter;

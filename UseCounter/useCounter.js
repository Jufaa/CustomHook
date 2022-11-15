import { useState } from "react";

export const useCounter = (value = 10) => {
  const [counter, setCounter] = useState(value);
  const sumarUno = () => {
    setCounter(counter + 1);
  };
  const sacarUno = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(value);
  };
  return {
    counter,
    sumarUno,
    sacarUno,
    reset,
  };
};

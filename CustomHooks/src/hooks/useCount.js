import { useState } from "react";

export const useCount = (num) => {
  const [count, setCount] = useState(num);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 10);
  }

  return { count, increment, decrement };
};

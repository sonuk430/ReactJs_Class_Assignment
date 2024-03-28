import { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handelDecrement = () => {
    setCount(count - 1);
  };

  const handelReset = () => {
    setCount(0);
  };

  const handelIncrementByFive = () => {
    // setCount(count + 5);
    setCount((precounte) => precounte + 5);
    // setCount((precounte) => precounte + 5);
    // setCount((precounte) => precounte + 5);
  };

  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handelReset}>Reset</button>
        <button onClick={handelDecrement}>decrenet</button>
        <button onClick={handelIncrementByFive}>increment By 5</button>
      </div>
    </>
  );
}

export default CounterApp;

import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  //   counter increase fun
  const increase = () => {
    setCounter(counter + 1);
  };

  //  counter decrease  fun

  const decrease = () => {
    if (counter != 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <div className = "counter">
        <h2>Counter App</h2>
        <h4>Counter: {counter}</h4>
        <button onClick={increase}>Add</button>
        <button onClick={decrease}>Remove</button>
      </div>
      <hr />
    </>
  );
}

export default Counter;

import React, { useState } from "react";

function HookCounterTwo() {
  const initialState = 0;
  const [count, setCount] = useState(initialState);

  function incrementFive() {
    for (let i = 1; i <= 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  }

  return (
    <div>
      <h1>Hook Counter Two</h1>
      <button onClick={() => setCount((prev) => prev + 1)} type="button">
        +
      </button>
      <h3>Counter : {count}</h3>
      <button onClick={() => setCount((prev) => prev - 1)} type="button">
        -
      </button>

      <button onClick={() => setCount(initialState)} type="button">
        RESET
      </button>

      <button onClick={incrementFive} type="button">
        Increment 5
      </button>
    </div>
  );
}

export default HookCounterTwo;

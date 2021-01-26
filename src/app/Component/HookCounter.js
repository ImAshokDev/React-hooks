import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hook Counter</h1>
      <button onClick={() => setCount(count + 1)} type="button">
        +
      </button>
      <h3>Counter : {count}</h3>
      <button onClick={() => setCount(count - 1)} type="button">
        -
      </button>
    </div>
  );
}

export default HookCounter;

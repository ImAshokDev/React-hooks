import React, { useContext } from "react";

import { CountContext } from "./index";

function ComponentA() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <h1>useReducer + useContext Component A : {countContext.countState}</h1>

      <div>
        <button
          onClick={() => countContext.countDispatch("increment")}
          type="button"
        >
          INCREMENT
        </button>
        <button
          onClick={() => countContext.countDispatch("decrement")}
          type="button"
        >
          DECREMENT
        </button>
        <button
          onClick={() => countContext.countDispatch("reset")}
          type="button"
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default ComponentA;

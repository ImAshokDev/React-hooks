import React, { useReducer } from "react";

const initialState = {
  firstCount: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCount: state.firstCount + action.value };
    case "decrement":
      return { firstCount: state.firstCount - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function ReducerHook2() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>useReducer Hook example 2</h1>

      <h3>First Counter : {count.firstCount}</h3>
      <button
        onClick={() =>
          dispatch({
            type: "increment",
            value: 1,
          })
        }
        type="button"
      >
        INCREMENT
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrement",
            value: 1,
          })
        }
        type="button"
      >
        DECREMENT
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "increment",
            value: 5,
          })
        }
        type="button"
      >
        INCREMENT 5
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrement",
            value: 5,
          })
        }
        type="button"
      >
        DECREMENT 5
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "reset",
          })
        }
        type="button"
      >
        RESET
      </button>
    </div>
  );
}

export default ReducerHook2;

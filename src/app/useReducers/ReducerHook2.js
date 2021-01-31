import React, { useReducer } from "react";

const initialState = {
  firstCount: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCount: state.firstCount + action.value };
    case "decrement":
      return { ...state, firstCount: state.firstCount - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
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
      <h3>Second Counter : {count.secondCounter}</h3>
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

      <div>
        <button
          onClick={() =>
            dispatch({
              type: "increment2",
              value: 5,
            })
          }
          type="button"
        >
          INCREMENT2
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "decrement2",
              value: 5,
            })
          }
          type="button"
        >
          DECREMENT2
        </button>
      </div>
    </div>
  );
}

export default ReducerHook2;

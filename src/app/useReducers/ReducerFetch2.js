import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Something went wrong",
      };

    default:
      return state;
  }
};

function ReducerFetch2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/2")
      .then((res) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_ERROR",
        });
      });
  }, []);

  return (
    <div>
      <h1>useReducer Fetch 2</h1>
      {state.loading ? <p>Loading...</p> : null}
      {state.error ? <p>{state.error}</p> : null}
      {state.post ? <p>{state.post.title}</p> : null}
    </div>
  );
}

export default ReducerFetch2;

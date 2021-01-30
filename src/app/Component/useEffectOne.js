import React, { useState, useEffect } from "react";

export default function useEffectOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("render method");
    document.title = `Your Page ${count}`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>Counter : {count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)} type="button">
        +
      </button>
    </div>
  );
}

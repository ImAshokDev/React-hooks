import React, { useEffect, useRef, useState } from "react";

function UseRefTwo() {
  const intervalRef = useRef(null);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Hook useRef Counter - {timer}</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Stop Timer
      </button>
    </div>
  );
}

export default UseRefTwo;

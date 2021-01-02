import React, { useEffect } from "react";

const App = () => {

  function MapFunc() {
    const a1 = [1, 2, 3, 4];
    const newArr = a1.map((el) => {
      return el * 2;
    });

    console.log("OLD ARRAY: ", a1);
    console.log("NEW ARRAY: ", newArr);
  }

  useEffect(() => {
    MapFunc();
  }, []);

  return (
    <div>
      <h1>React App</h1>
    </div>
  );
};

export default App;

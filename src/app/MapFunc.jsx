import React, { useEffect } from "react";

const ArrayMap = () => {
  function forEachFunc() {
    const a1 = [1, 2, 3, 4];
    const newArr = a1
      .map((el) => {
        return el * 2;
      })
      .filter((el) => el === 4);

    console.log("OLD ARRAY: ", a1);
    console.log("NEW ARRAY: ", newArr);
  }

  function MapFunc() {
    const a1 = [1, 2, 3, 4];
    const newArr = a1
      .map((el) => {
        return el * 2;
      })
      .filter((el) => el > 6);

    console.log("MAP OLD ARRAY: ", a1);
    console.log("MAP NEW ARRAY: ", newArr);
  }

  useEffect(() => {
    forEachFunc();
    MapFunc();
  }, []);

  return (
    <div>
      <h1>Map vs forEach</h1>
    </div>
  );
};

export default ArrayMap;

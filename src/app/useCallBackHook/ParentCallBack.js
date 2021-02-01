import React, { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

function ParentCallBack() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge((prev) => prev + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary((prev) => prev + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={incrementAge} title="Increment age" />
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary} title="Increment Salary" />
    </div>
  );
}

export default ParentCallBack;

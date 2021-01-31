import React, { useContext } from "react";
import { AgeContext, UserContext } from "../../App";

function HookContext2() {
  const name = useContext(UserContext);
  const age = useContext(AgeContext);
  return (
    <div>
      <h1>Context Hook 2</h1>
      <h2>
        user Name: {name}, age: {age}
      </h2>
    </div>
  );
}

export default HookContext2;

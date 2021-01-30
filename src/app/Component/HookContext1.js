import React from "react";
import { AgeContext, UserContext } from "../../App";

function HookContext1() {
  return (
    <div>
      <h1>Context Hook 1</h1>
      <UserContext.Consumer>
        {(name) => {
          return (
            <AgeContext.Consumer>
              {(age) => {
                return (
                  <h2>
                    user Name: {name}, age: {age}
                  </h2>
                );
              }}
            </AgeContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default HookContext1;

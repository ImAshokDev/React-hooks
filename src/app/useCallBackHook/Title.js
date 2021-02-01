import React, { memo } from "react";

function Title() {
  console.log("Rendering... title");
  return (
    <div>
      <h1>useCallBack Hook</h1>
    </div>
  );
}

export default memo(Title);

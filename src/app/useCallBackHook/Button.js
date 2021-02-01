import React, { memo } from "react";

function Button({ handleClick, title }) {
  console.log("Rendering... button", title);
  return (
    <button onClick={handleClick} type="button">
      {title}
    </button>
  );
}

export default memo(Button);

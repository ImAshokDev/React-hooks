import React, { useMemo, useState } from "react";

function UseMemoHook() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const isEvent = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return countOne % 2 == 0;
  }, [countOne]);

  return (
    <div>
      <div>
        <button onClick={() => setCountOne((prev) => prev + 1)} type="button">
          Counter One - {countOne}
        </button>
        <p>{isEvent ? "Event" : "odd"}</p>
      </div>
      <div>
        <button onClick={() => setCountTwo((prev) => prev + 1)} type="button">
          Counter Two - {countTwo}
        </button>
      </div>
    </div>
  );
}

export default UseMemoHook;

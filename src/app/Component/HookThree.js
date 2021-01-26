import React, { useState } from "react";

function HookThree() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  return (
    <div>
      <h1>Hook useState With Object</h1>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
        placeholder="First Name"
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
        placeholder="Last Name"
      />
      <h1>First Name: {name.firstName}</h1>
      <h1>Last Name: {name.lastName}</h1>
      <h3>{JSON.stringify(name)}</h3>
    </div>
  );
}

export default HookThree;

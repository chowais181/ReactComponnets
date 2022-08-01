import React, { useState } from "react";
export default function Binding() {
  const [name, setName] = useState("No name");
  function handlChange(e) {
    setName(e.target.value);
  }
  return (
    <div>
      <input type="text" value={name} onChange={handlChange} />
      <h1>{name}</h1>
    </div>
  );
}

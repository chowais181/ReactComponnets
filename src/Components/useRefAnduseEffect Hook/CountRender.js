// If we tried to count how many times our application
// renders using the useState Hook, we would be caught
// in an infinite loop since this Hook itself causes a re-render.
// To avoid this, we can use the useRef Hook.

import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
// Use useRef to track application renders.
//to see the correct result remove strict mode in index.js file
export default function CountRender() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  // const [count1, setCount] = useState(0);
  // useEffect(() => console.log(count1));

  useEffect(() => {
    console.log("render1", count.current);
    count.current = count.current + 1;
    console.log("render2", count.current);
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

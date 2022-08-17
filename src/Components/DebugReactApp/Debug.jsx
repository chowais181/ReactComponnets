import React, { useState } from "react";
export default function Debug() {
  const [count, setCount] = useState(new Date().toLocaleTimeString());

  //   setCount(count + 1); // State update in the render
  setInterval(function(){setCount(new Date().toLocaleTimeString())}, 1000);
  return (
    <div className="App">
      {/* onClick doesn't receive a proper callback */}
      {count}
    </div>
  );
}

import { useRef, useState, useEffect } from "react";

export default function Stopwatch() {
  //here we are usng useRef as the var
  //stroing the complete function and
  // to stop it we calll i tin the argument of the clear interval fucntion
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);

  const startHandler = () => {
    timerIdRef.current = setInterval(
      () => setCount((count) => count + 1),
      1000
    );
  };

  const stopHandler = () => {
    //for stopping the interval
    //timer will stop
    clearInterval(timerIdRef.current);
  };
  function resetHandler() {
    setCount((c) => (c = 0));
  }

  //it is used to clear the unwanted behaviour and to prevent the memory leak
  //it will not run on the first render
  //it will run on the 2nd times or more before the other effect
  useEffect(() => {
    console.log("useEffect interval");
    return () => {
      console.log("Clear interval");
      clearInterval(timerIdRef.current);
    };
  }, []);

  return (
    <div>
      {/* clear interval will call if we remove the div main class */}
      <div className="main">
        <div>Timer: {count}s</div>
        <div>
          <button onClick={startHandler}>Start</button>
          <button onClick={stopHandler}>Stop</button>
          <button onClick={resetHandler}>Reset</button>
        </div>
      </div>
    </div>
  );
}

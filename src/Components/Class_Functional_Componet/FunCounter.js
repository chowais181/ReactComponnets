import React, { useEffect } from "react";

function Counter1({ number }) {
  // it runs only once
  // only this part will triger after the render (return) when the state or props changes
  useEffect(() => {
    console.log("useEffect[]:first time");
  }, []);

  //It will run first time and whenever changes occuring in the state or props
  useEffect(() => {
    console.log("useEffect[] : updating.....");
    // cleanup function
    //for optimizing and prevent memory leak
    //it will not run on the first time
    // if state component render 2nd times or more than it
    //  will run before the other than written in the useEffect
    //it will call before the side effect
    // cleanup function does not only run when our component wants to unmount,
    //so it is differ from the componentWillUnmount
    return () => {
      //     Assignments to the 'temp' variable from inside React Hook
      //     useEffect will be lost after each render. To preserve
      //      the mutable value in the '.current' property.
      //     Otherwise, you can move this variable directly inside useEffect
      //   temp = temp + 1;
      console.log("useEffect[] -> cleanupFunction:before the updating..");
    };
  }, [number]);

  return (
    <>
      <h5>With functional component</h5>
      {/* everyting is not rendering only the number is rendering bcz state or props*/}
      <h5>Count : {number}</h5>
    </>
  );
}
export default Counter1;

// --------imp------------
//here we are using the useref for accessing the dom element
// focus on the input element
//getting the value from the input element
//instead of rendering again and again we get the value at last.

import React, { useEffect, useRef, useState } from "react";
export default function Form() {
  const name = useRef(""); //it prints at last when we submit
  const [email, setEmail] = useState(""); // the email is printing on every alphabet
  const password = useRef();
  //   console.log(email);
  //useEffect will run after rendering
  useEffect(() => {
    //it gives us the dom element on initial rendering
    //bcz useEffect will run after rendering
    console.log(name.current);
    password.current.focus();
  }, [name]);
  //it prints undefined on the initial renderning bcz
  // it runs first then return -> render the on dom
  console.log(name.current);
  function handleSubmit(event) {
    event.preventDefault();
    console.log(name.current.value);
  }
 

  return (
    <>
      <input type="text" name="name" placeholder="Enter the name" ref={name} />
      <input
        type="email"
        name="name"
        value={email}
        placeholder="Enter the email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        name="name"
        placeholder="Enter the password"
        ref={password}
      />
      <input
        type="submit"
        name="submit"
        value="Submit"
        onClick={handleSubmit}
      />
    </>
  );
}

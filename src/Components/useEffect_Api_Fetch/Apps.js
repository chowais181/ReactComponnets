// App component
import React, { useState } from "react";
import Post from "./Post";
const Apps = () => {
  const [show, setShow] = useState(false);
  const showPost = () => {
    // toggles posts onclick of button
    setShow(!show);
  };
  return (
    <div>
      <button onClick={showPost}>Show Posts</button>
      {show && <Post />}
    </div>
  );
};
export default Apps;

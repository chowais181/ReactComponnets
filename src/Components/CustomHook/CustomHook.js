//we make a custom hook and use it in the home 
// or can be use in the any other function
import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};
export default useFetch;

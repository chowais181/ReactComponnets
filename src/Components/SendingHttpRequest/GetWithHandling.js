import React, { useEffect, useState } from "react";
export default function Send() {
  const [result, setResult] = useState();
const [err,setErr]=useState();
  useEffect(() => {
    fetch("https://api.npms.io/v2/search?q=react")
      .then(async (response) => {
        const data = await response.json();
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
         
          return Promise.reject(error);
        }
      })
      .then(function (data) {
        setResult(data);
        console.log(data);
      })
      .catch(function (error) {
        setErr(error);
        console.error("There was an error!", error);
      });

    // empty dependency array means
    //  this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <>
      <h2>Sendig the http request</h2>
      <p>Total packages: {result && result.total}</p>
      <p>Total length : {result && result.results.length}</p>
      {result &&
        result.results.map((result, i) => (
          <div className="card text-center m-3" key={i}>
            <h5 className="card-header">{result.package.name}</h5>
            <div className="card-body">
              <p>{result.package.description}</p>
              <h5>{result.score.detail.popularity}</h5>
            </div>
          </div>
        ))}
    </>
  );
}

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
export default function Send() {
  const [result, setResult] = useState();
  useEffect(() => {
    fetch("https://api.npms.io/v2/search?q=react")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setResult(data);
        console.log(data);
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
              <FontAwesomeIcon icon={faCoffee} />
            </div>
          </div>
        ))}
    </>
  );
}

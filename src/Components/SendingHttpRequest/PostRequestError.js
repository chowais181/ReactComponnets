import React, { useState, useEffect } from "react";

function PostRequestError() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState();
  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "hi welcome " }),
    };

    fetch("https://reqres.in/api/posts", requestOptions)
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        //handling for the post request
        const data = isJson && (await response.json());

        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        setData(data);
      })
      .catch((err) => {
        setErr(err);
        console.log(err);
      });


    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <div className="card text-center m-3">
      <h5 className="card-header">POST Request with Error Handling</h5>
      <p>{err && err.message}</p>

      <h3>Title: {data && data.title}</h3>
      <div className="card-body">Returned Id: {data && data.id}</div>
    </div>
  );
}

export default PostRequestError;

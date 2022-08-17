import React, { useState, useEffect } from "react";

function PostRequestAsync() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "hi welcome " }),
    };
    async function fun() {
      const response = await fetch(
        "https://reqres.in/api/posts",
        requestOptions
      );
      const data = await response.json();
      console.log(data);
      setData(data);
    }
    fun();
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <div className="card text-center m-3">
      <h5 className="card-header">POST Request with React Hooks</h5>
      <h3>Title: {data && data.title}</h3>
      <div className="card-body">Returned Id: {data && data.id}</div>
    </div>
  );
}

export default PostRequestAsync;

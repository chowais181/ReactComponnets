// Post component
import React, { useState, useEffect } from "react";
import { Card } from "@mui/material";
export default function Post() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://jsonplaceholder.typicode.com/posts", { signal: signal })
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
      })                
      .catch((err) => setError(err));
    return () => controller.abort();
  }, []);
  return (
    <div>
      {!error ? (
        <Card>
          {posts.map((post) => (
            <ul key={post.id}>
              <li>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            </ul>
          ))}
        </Card>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Loader from "./Loader";
export default function DisplayUsers() {
  // Keeping code short with one API response
  const [state, setState] = useState({
    loading: true,
    response: null,
    error: null,
  });
  useEffect(() => {
    // make http request
    fetch("https://api.npms.io/v2/search?q=react")
      .then(async function (response) {
        const data = await response.json();
        setState({
          loading: false,
          response: data,
          error: null,
        });
      })
      .catch((error) =>
        setState({
          loading: false,
          response: null,
          error,
        })
      );
  }, []);
  return (
    <div>
      {state && state.error ? "Error" : null}
      {state && state.loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          {/* Display users: */}
          <div>
            we have total users : {state && state.response.total}
            {/* {state &&  state.response.map((user) => (
              <p key={user + 1}>{user}</p>
            ))} */}
          </div>
        </div>
      )}
    </div>
  );
}

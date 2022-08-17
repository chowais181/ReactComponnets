import React, { useEffect, useState } from "react";
export default function Weather() {
  const [result, setResult] = useState();
  //   const [city, setCity] = useState("Lahore");
  //   const [err, setErr] = useState();
  useEffect(() => {
    fetch(
      "   https://api.openweathermap.org/data/2.5/weather?q=lahore&units=metric&appid=d1f40bb4d41311dbf68fbda0df53b451"
    )
      .then((res) => res.json())
      .then((result) => {
        setResult(result);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    // empty dependency array means
    //  this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <>
      <h2>Weather App</h2>
      {result && result.main.temp}
    </>
  );
}

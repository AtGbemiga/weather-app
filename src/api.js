import { API_KEY, BASE_URL } from "./keys";
import { useEffect, useState } from "react";

const WeatherApi = ({location}) => {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
      fetch(`${BASE_URL}weather?q=${location}&appid=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
          setApiData(data);
          console.log(data);
        })
        .catch((error) => console.log(error));
  }, []);

  return { apiData };
};

export default WeatherApi;

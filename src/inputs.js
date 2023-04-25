import './App.css';
import { API_KEY, BASE_URL } from "./keys";
import { useEffect, useState } from "react";


const InputsAndBtn = () => {
    const [location, setLocation] = useState("");
    const [apiData, setApiData] = useState(null);
  
    function handleBtn(event) {
      event.preventDefault();
  
      fetch(`${BASE_URL}weather?q=${location}&appid=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
          setApiData(data);
          console.log(data);
        })
        .catch((error) => console.log(error));
    }
  
    return (
      <form className="form">
        <div style={{ display: "flex" }}>
          <section style={{ marginRight: "auto" }}>
            <input
              onChange={(event) => setLocation(event.target.value)}
              type="text"
              placeholder="enter a city"
              value={location}
            ></input>
            <button onClick={handleBtn}>Start</button>
          </section>
          {apiData && (
            <section style={{ backgroundColor: "red", width: "30vw", height: "100vh" }}>
              <h1>{apiData.clouds.all}</h1>
              <h2>{apiData.weather[0]["description"]}</h2>
            </section>
          )}
        </div>
      </form>
    );
  };
    

export default InputsAndBtn
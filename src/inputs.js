import './App.css';
import { API_KEY, BASE_URL } from "./keys";
import { useEffect, useState } from "react";
import oOned from "../src/imgs/01d.png"
import oOnen from "../src/imgs/01n.png"
import oTwod from "../src/imgs/02d.png"
import oTwon from "../src/imgs/02n.png"
import oThreed from "../src/imgs/03d.png"
import oThreen from "../src/imgs/03n.png"
import ofourd from "../src/imgs/04d.png"
import ofourn from "../src/imgs/04n.png"
import oNined from "../src/imgs/09d.png"
import oNinen from "../src/imgs/09n.png"
import oTend from "../src/imgs/10d.png"
import oTenn from "../src/imgs/10n.png"
import oElevend from "../src/imgs/11d.png"
import oElevenn from "../src/imgs/11n.png"
import oThirtennd from "../src/imgs/13d.png"
import oThirtennn from "../src/imgs/13n.png"
import oFiftyd from "../src/imgs/50d.png"
import oFiftyn from "../src/imgs/50n.png"


const InputsAndBtn = () => {
    const [location, setLocation] = useState("");
    const [apiData, setApiData] = useState(null);
    const [backgroundColor, setBackgroundColor] = useState("white");
    const [displayLogo, setDisplayLogo] = useState("")
  
    useEffect(() => {
      let bgimg = apiData?.weather[0]?.description;
      if (bgimg === "clear sky") {
        setBackgroundColor("lime");
      } else if (bgimg === "few clouds") {
        setBackgroundColor("blue");
      } else if (bgimg === "scattered clouds") {
        setBackgroundColor("yellow");
      } else if (bgimg === "broken clouds") {
        setBackgroundColor("pink");
      } else if (bgimg === "shower rain") {
        setBackgroundColor("grey");
      } else if (bgimg === "rain") {
        setBackgroundColor("brown");
      } else if (bgimg === "thunderstorm") {
        setBackgroundColor("whitesmoke");
      } else if (bgimg === "snow") {
        setBackgroundColor("orange");
      } else if (bgimg === "mist") {
        setBackgroundColor("purple");
      } else if(bgimg === "overcast clouds") {
        setBackgroundColor("violet");
      } else {
        setBackgroundColor("white");
      }
    }, [apiData]);

    useEffect(()=> {
      let weatherLogo = apiData?.weather[0]?.icon
    if (weatherLogo === "01d") {
      setDisplayLogo( oOned)
    } else if(weatherLogo === "01n") {
      setDisplayLogo( oOnen)
    } else if(weatherLogo === "02d") {
      setDisplayLogo( oTwod)
    } else if(weatherLogo === "02n") {
      setDisplayLogo( oTwon)
    } else if(weatherLogo === "03d") {
      setDisplayLogo( oThreed)
    } else if(weatherLogo === "03n") {
      setDisplayLogo( oThreen)
    } else if(weatherLogo === "04d") {
      setDisplayLogo( ofourd)
    } else if(weatherLogo === "04n") {
      setDisplayLogo( ofourn)
    } else if(weatherLogo === "09d") {
      setDisplayLogo( oNined)
    } else if(weatherLogo === "09n") {
      setDisplayLogo( oNinen)
    } else if(weatherLogo === "10d") {
      setDisplayLogo( oTend)
    } else if(weatherLogo === "10n") {
      setDisplayLogo( oTenn)
    } else if(weatherLogo === "11d") {
      setDisplayLogo( oElevend)
    } else if(weatherLogo === "11n") {
      setDisplayLogo( oElevenn)
    } else if(weatherLogo === "13d") {
      setDisplayLogo( oThirtennd)
    } else if(weatherLogo === "13n") {
      setDisplayLogo( oThirtennn)
    } else if(weatherLogo === "50d") {
      setDisplayLogo( oFiftyd)
    } else if(weatherLogo === "50n") {
      setDisplayLogo( oFiftyn)
    }
    }, [apiData])
  
    function handleBtn(event) {
      event.preventDefault();
  
      fetch(`${BASE_URL}weather?q=${location}&appid=${API_KEY}&units=metric`)
        .then((res) => res.json())
        .then((data) => {
          setApiData(data);
          console.log(data);
        })
        .catch((error) => console.log(error));
    }
  
    return (
      <>
        <form>
          <section className="input_section">
            <input
              onChange={(event) => setLocation(event.target.value)}
              type="text"
              placeholder="Enter a city"
              value={location}
            ></input>
            <button onClick={handleBtn}>Search</button>
          </section>
        </form>
        <div>
          {apiData && (
            <section
              className="uiSection"
              style={{ backgroundColor: backgroundColor }}
            >
              <img className='display-logo' src={displayLogo}/>
              <h1 style={{marginTop: 0, fontSize: "3rem"}}>{apiData.main.temp}°C</h1>
              <h1 style={{marginBottom: 0}}>Clouds: {apiData.clouds.all} %</h1>
              <h2 style={{marginTop: 0}}>{apiData.weather[0]["description"]}</h2>
              <h2>
                {apiData.name}, {apiData.sys.country}
              </h2>
              <h3>Feels like: {apiData.main.feels_like} °C</h3>
              <h3>Wind speed: {apiData.wind.speed} m/s</h3>
              <h3>Humidity: {apiData.main.humidity}</h3>
            </section>
          )}
        </div>
      </>
    );
  };  
    

export default InputsAndBtn
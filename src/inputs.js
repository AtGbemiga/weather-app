import { useState } from "react"
import './App.css';
import  WeatherApi  from "./api";

const InputsAndBtn = () => {
    const {apiData} = WeatherApi()
    const [location, setLocation] = useState("")
    const [weatherUi, setWeatherUi] = useState("")

    function handleChange(event) {
        setLocation(event.target.value)
    }
    function handleBtn(event) {
        event.preventDefault()
        setWeatherUi(() => {
            if(location === apiData.city.name) {
                return apiData.list[1].clouds.all
            }
        })
    }
    return (
        <form className="form">
            <input 
            onChange={handleChange}
            type="text"
            placeholder="enter a city"
            value={location}
            >
            </input>
            <button onClick={handleBtn}>Start</button>
            <h1>{weatherUi}</h1>
        </form>
    )
}

export default InputsAndBtn
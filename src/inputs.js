import { useState } from "react"
import './App.css';
import  WeatherApi  from "./api";

const InputsAndBtn = () => {
    const apiDatas = WeatherApi()
    console.log(apiDatas)
    const [location, setLocation] = useState("")

    function handleChange(event) {
        setLocation(event.target.value)
    }
    function handleBtn(event) {
        event.preventDefault()
    }
    return (
        <form className="form">
            <input 
            onChange={handleChange}
            type="text"
            placeholder="enter a city"
            >
            </input>
            <button onClick={handleBtn}>Start</button>
        </form>
    )
}

export default InputsAndBtn
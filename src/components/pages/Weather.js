import React, { useEffect, useState } from 'react'
import './weather.css'
import coldBg from './weatherImg/cold.jpg'
import hotBg from './weatherImg/hot.jpg'
import Descriptions from './Descriptions'
import { getFormattedWeatherData } from './weatherService'
import Footer from '../Footer'


function Weather() {

const [city,setCity]=useState("Paris");
  const [weather,setWeather]=useState(null);
  const[units,setUnits]=useState("metric")
  const [bg,setBg]=useState(hotBg)
  useEffect(()=>{const fetchWeatherData = async ()=>{
    const data = await getFormattedWeatherData(city ,units);
    setWeather(data);

    const treshold = units === 'metric' ? 20 : 60;
    if (data.temp <= treshold) setBg(coldBg);
    else setBg(hotBg);


  };
  fetchWeatherData();
},[units,city]);

const handleUnitsClick = (e) => {
  const button = e.currentTarget;
  const currentUnit = button.innerText;

  const isCelsius = currentUnit === "°C";
  button.innerText = isCelsius ? "°F" : "°C";
  setUnits(isCelsius ? "imperial" : "metric");
};
const enterKeyPressed =(e)=>{
  if(e.keyCode === 13){
    setCity(e.currentTarget.value);
    e.currentTarget.blur();
  }

}

  return (
    <>
    <div className="app" style={{backgroundImage:`url(${bg})`}}>
   <div className='overlay'>
    {
      weather &&(
        <div className='container'>
        <div className='section section_inputs'>
        <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder='Enter City...' />
        <button onClick={(e) => handleUnitsClick(e)}>°F</button>
        </div>

        <div className="section section_temperature">
            <div className='icon'>
                <h3>{`${weather.name},${weather.country}`}</h3>
                <img className="img2" src={weather.iconURL} alt='weatherIcon'/>
                <h3>{weather.description}</h3>
            </div>
            <div className='temperature'>
                <h1>{`${weather.temp.toFixed()}${units=== 'metric' ? '°C' :'°F'}`}</h1>
            </div>
        </div>
<Descriptions weather={weather} units={units}/>
     
    </div>
    
      )
    }

   </div>
    </div>
    <Footer />
    </>
  )
}

export default Weather
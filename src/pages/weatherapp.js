import React, { useState } from 'react'
import '../component/weatherapp/weather.css'
import axios from 'axios';

const Weatherapp = () => {
    const [getData, setdata] = useState({});
    const [location, setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=504bc64632dbd77f90d1b5fed467172d`

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => { setdata(response.data); console.log(response.data) }).catch((error) => {
                console.log(error)
            })
            setLocation('')
        }

    }

    return (
        <div className='weatherapp'>
            <div className="search">
                <input type="text" value={location} onChange={event => {
                    setLocation(event.target.value)
                }} placeholder='Enter Location' onKeyPress={searchLocation} />
            </div>
            <div className="container">
                <div className="top">
                    <div className="location">
                        <p>{getData.name}</p>
                    </div>
                    <div className="temp">
                        <h2>{getData.main.temp} °F</h2>
                    </div>
                    <div className="description">
                        <p> Clouds</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="feels">
                        <p className='bold'>65 F</p>
                        <p>Feels Like</p>
                    </div>
                    <div className="humidity">
                        <p className='bold'>
                            20%
                        </p>
                        <p>Humidity</p>
                    </div>
                    <div className="wind">
                        <p className='bold'>
                            12MPH
                        </p>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Weatherapp
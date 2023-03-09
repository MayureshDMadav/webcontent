import React, { useState } from 'react'
import '../weatherapp/weather.css'
import axios from 'axios';
import { Button } from '@mui/material';

const Weatherapp = () => {
    const [getData, setdata] = useState({});
    const [location, setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_SECRET_KEY_W}`


    const FetcInfo = () => {

        axios.get(url).then((response) => { setdata(response.data); console.log(response.data) }).catch((error) => {
            console.log(error)
        })


    }



    return (
        <div className='weatherapp'>
            <div className="search">
                <input type="text" value={location} onChange={event => {
                    setLocation(event.target.value)
                }} placeholder='Enter Location' />
                <Button variant='contained' sx={{ color: 'black', border: '1px solid white', marginLeft: '15px', backgroundColor: 'white' }} onClick={FetcInfo} > Fetch Temp</Button>
            </div>
            <div className="container">
                <div className="top">
                    <div className="location">
                        {getData != 0 ? <p>{getData.name}</p> : ""} {getData.sys ? getData.sys.country : ""}
                    </div>
                    <div className="temp">
                        {getData.main ? <h1>{getData.main.temp} °F</h1> : null}
                    </div>
                    <div className="description">
                        {getData.weather ? <p>{getData.weather[0].description}</p> : null}
                    </div>
                </div>
                <div className="bottom">
                    <div className="feels">
                        {getData.main ? <p className='bold'>{getData.main.feels_like} °F</p> : null}
                        <p>Feels Like</p>
                    </div>
                    <div className="humidity">
                        {getData.main ? <p className='bold'>{getData.main.humidity} °F</p> : null}
                        <p>Humidity</p>
                    </div>
                    <div className="wind">
                        {getData.wind ? <p className='bold'>{getData.wind.speed} MPH</p> : null}
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Weatherapp
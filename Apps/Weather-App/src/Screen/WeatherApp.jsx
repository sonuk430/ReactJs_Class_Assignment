import { useState } from "react";
import './WeatherApp.css'
export const WeatherApp = () => {

    const [location, setLocation] = useState("");
    const [data, setData] = useState({});

    const url = ` https://api.openweathermap.org/data/2.5/weather?q=${location},IN&appid=a90a42161cb74abb9207ce8be6081733`;

    // console.log(data.name);

    function searchLocation(e) {
        e.preventDefault();

        fetch(url)
            .then((res) => res.json())
            .then((result) => {
                setData(result);
                // console.log(data);
            })


        setLocation("");

    }

    return (
        <div className="app">

            <form action="submited" className="search" onSubmit={searchLocation}>
                <input type="text" placeholder="Enter Your Citiy Name" value={location} onChange={(e) => setLocation(e.target.value)} />
                <button>Search</button>
            </form>


            <div className="container">
                <div className="top">
                    <div className="location">
                        <p>{data.name}</p>
                    </div>
                    <div className="temp">
                        {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
                    </div>
                    <div className="description">
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div>
                </div>

                {data.name !== undefined &&
                    <div className="bottom">
                        <div className="feels">
                            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
                            <p>Feels Like</p>
                        </div>
                        <div className="humidity">
                            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                            <p>Humidity</p>
                        </div>
                        <div className="wind">
                            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
                            <p>Wind Speed</p>
                        </div>
                    </div>
                }
            </div>




        </div>

    )
}

{/* <div>
  {
    data.main ? <p>{data.main.temp.toFixed() - 273}°C</p> : null
  }
</div> */}
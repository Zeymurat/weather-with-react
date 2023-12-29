import React from "react";

function CityDetails(props){
        const { cod } = props.weatherInfo;
        console.log(typeof(cod));
        if (cod === 200) {
            const { name, dt } = props.weatherInfo;
            const { icon, description } = props.weatherInfo.weather[0];
            const { temp, humidity } = props.weatherInfo.main;
            const { speed } = props.weatherInfo.wind;
            // const { country } = props.weatherInfot.sys;
            let unix_timestamp = dt
            // Create a new JavaScript Date object based on the timestamp
            // multiplied by 1000 so that the argument is in milliseconds, not seconds.
            var date = new Date(unix_timestamp * 1000);
            // Hours part from the timestamp
            var hours = "0" + date.getHours();
            // Minutes part from the timestamp
            var minutes = "0" + date.getMinutes();
            // Seconds part from the timestamp
            var seconds = "0" + date.getSeconds();

            // Will display time in 10:30:23 format
            var formattedTime = hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
            var icontext = "https://openweathermap.org/img/wn/"+ icon + ".png";
            // console.log(icon);
            return (
                <div style={{ marginTop: '45px' }} className="today">
                    <h2 className="city">Weather on {name}</h2>
                    {/* <h2 className="city">Weather on  + {name} +  in  + {country}</h2> */}
                    <h2 className="currenttime">Last Update on {formattedTime}</h2>
                    <h1 className="temp">{temp}°</h1>
                    <div className="card_weather">
                        <img src={icontext} alt="" className="icon" />
                        <div className="description">{description}</div>
                    </div>
                    <div className="humidity">Humidity: <span className="humidityvalue">%{humidity}</span></div>
                    <div className="wind">Wind speed: <span className="windvalue">{speed}km/h</span></div>
                </div>
            )
        }
}

export default CityDetails

// import React, { Component } from 'react'
// export class CityDetails extends Component {
//     render() {
//         const { cod } = props.weatherInfo;
//         if (cod == "200") {
//             const { name, dt } = props.weatherInfo;
//             const { icon, description } = props.weatherInfo.weather[0];
//             const { temp, humidity } = props.weatherInfo.main;
//             const { speed } = props.weatherInfo.wind;
//             // const { country } = props.weatherInfot.sys;
//             let unix_timestamp = dt
//             // Create a new JavaScript Date object based on the timestamp
//             // multiplied by 1000 so that the argument is in milliseconds, not seconds.
//             var date = new Date(unix_timestamp * 1000);
//             // Hours part from the timestamp
//             var hours = "0" + date.getHours();
//             // Minutes part from the timestamp
//             var minutes = "0" + date.getMinutes();
//             // Seconds part from the timestamp
//             var seconds = "0" + date.getSeconds();

//             // Will display time in 10:30:23 format
//             var formattedTime = hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
//             var icontext = "https://openweathermap.org/img/wn/"+ icon + ".png";
//             // console.log(icon);
//             return (
//                 <div style={{ marginTop: '45px' }} className="today">
//                     <h2 className="city">Weather on {name}</h2>
//                     {/* <h2 className="city">Weather on  + {name} +  in  + {country}</h2> */}
//                     <h2 className="currenttime">Last Update on {formattedTime}</h2>
//                     <h1 className="temp">{temp}°</h1>
//                     <div className="card_weather">
//                         <img src={icontext} alt="" className="icon" />
//                         <div className="description">{description}</div>
//                     </div>
//                     <div className="humidity">Humidity: <span className="humidityvalue">%{humidity}</span></div>
//                     <div className="wind">Wind speed: <span className="windvalue">{speed}km/h</span></div>
//                 </div>
//             )
//         }
//     }
// }

// export default CityDetails
import React from 'react'

export default function Weather(props) {
    return (
     <div className="weather__info">
        { 
            props.city && props.country && <p className="weather__key">
                <span className="weather__value">Current Location: {props.country}, {props.city}</span></p> 
        }
        {
             props.temperature && <p className="weather__key">
                 <span className="weather__value">Temperature: {props.temperature}°C</span></p> 
        }
        {
            props.humidity && <p className="weather__key">
                <span className="weather__value">Humidity: {props.humidity}%</span></p> 
        }
        {
            props.description && <p className="weather__key">
                <span className="weather__value">Conditions: {props.description}</span></p> 
        }
        {
             props.longitude && props.latitude && <p className="weather__key">
                 <span className="weather__value">Coordinate -  Longitude: {props.longitude}, Latitude: {props.latitude}</span></p>
        }
        {
            props.timezone && <p className="weather__key">
                <span className="weather__value">Timezone: {props.timezone}</span></p> 
        }
        {
            props.wind && <p className="weather__key">
                <span className="weather__value">Wind: {props.wind}m/s</span></p> 
        }
        {
             props.min_temp && <p className="weather__key">
                 <span className="weather__value">Min temp: {props.min_temp}°C</span></p> 
        }
        {
             props.max_temp && <p className="weather__key">
                 <span className="weather__value">Max temp: {props.max_temp}°C</span></p> 
        }
        {
            props.error && <p className="weather__error">{props.error}</p> 
        }
     </div>
    )
}


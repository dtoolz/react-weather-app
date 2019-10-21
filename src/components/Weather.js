import React from 'react'

export default function Weather(props) {
    return (
     <div>
        { props.city && props.country && <p>Current Location: {props.country}, {props.city}</p> }
        { props.temperature && <p>Temperature: {props.temperature}°C</p> }
        {props.humidity && <p>Humidity: {props.humidity}%</p> }
        {props.description && <p>Conditions: {props.description}</p> }
        { props.longitude && props.latitude && <p>Current coordinate -  Longitude: {props.longitude}, Latitude: {props.latitude}</p> }
        {props.timezone && <p>Timezone: {props.timezone}</p> }
        {props.wind && <p>Wind: {props.wind}m/s</p> }
        { props.min_temp && <p>Minimum attained temperature: {props.min_temp}°C</p> }
        { props.max_temp && <p>Maximum attained temperature: {props.max_temp}°C</p> }
        {props.error && <p>{props.error}</p> }
     </div>
    )
}


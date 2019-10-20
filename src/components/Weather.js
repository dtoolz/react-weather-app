import React from 'react'

export default function Weather(props) {
    return (
     <div>
        { props.city && props.country && <p>Current Location: {props.country}, {props.city}</p> }
        { props.temperature && <p>Temperature: {props.temperature}</p> }
        {props.humidity && <p>Humidity: {props.humidity}</p> }
        {props.description && <p>Conditions: {props.description}</p> }
        {props.error && <p>{props.error}</p> }
     </div>
    )
}


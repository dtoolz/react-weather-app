import React from 'react'

export default function Form(props) {
    return (
       <form onSubmit={props.getWeather} >
          <input type="text" name="city" placeholder="type in your city" />
          <input type="text" name="country" placeholder="type in your country"/>
          <button>Get Your Weather Report</button>
       </form>
    )
}


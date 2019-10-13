import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather} >
                <input type="text" name="city" placeholder="type in your city" />
                <input type="text" name="country" placeholder="type in your country"/>
                <button>Get Your Weather Report</button>
            </form>
        )
    }
}

import React from "react"; 
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


 const API_KEY = "db45eacc27d92182b613e7fd16550148";

class App extends React.Component {
    state = {
       temperature : undefined,
       city : undefined,
       country : undefined,
       humidity : undefined,
       description : undefined,
       longitude : undefined,
       latitude : undefined,
       timezone: undefined,
       wind: undefined,
       min_temp: undefined,
       max_temp: undefined,
       error : undefined
    }

  getWeather = async (e) => {
       e.preventDefault();
       const city = e.target.elements.city.value;
       const country = e.target.elements.country.value;
      const api_call = await 
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      //arranging information in json format
      const data = await api_call.json();
      if( city && country ){
        //console.log(data);
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          longitude: data.coord.lon,
          latitude: data.coord.lat,
          timezone: data.timezone,
          wind: data.wind.speed,
          min_temp: data.main.temp_min,
          max_temp: data.main.temp_max,
          error: ""
        });
      } else {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          longitude: undefined,
          latitude: undefined,
          timezone: undefined,
          wind: undefined,
          min_temp: undefined,
          max_temp: undefined,
          error: "please input some values"
        });
      };
  };
    render() {
      return (
        <div>
          <Titles />
          <Form getWeather={this.getWeather} />
          <Weather
             temperature={this.state.temperature}
             city={this.state.city}
             country={this.state.country}
             humidity={this.state.humidity}
             description={this.state.description}
             longitude={this.state.longitude}
             latitude={this.state.latitude}
             timezone={this.state.timezone}
             wind={this.state.wind}
             min_temp={this.state.min_temp}
             max_temp={this.state.max_temp}
             error={this.state.error}
          />
        </div>

      );
    }
};

export default App;

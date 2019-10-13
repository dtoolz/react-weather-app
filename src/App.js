import React from "react"; 
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


 const API_KEY = "db45eacc27d92182b613e7fd16550148";

class App extends React.Component {
  getWeather = async (e) => {
       e.preventDefault();
      const api_call = await 
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=ife,ng&appid=${API_KEY}&units=metric`);
      //arranging information in json format
      const data = await api_call.json();
      console.log(data);
  }
    render() {
      return (
        <div>
          <Titles />
          <Form getWeather={this.getWeather} />
          <Weather />
        </div>

      );
    }
};

export default App;

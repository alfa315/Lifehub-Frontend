import React from 'react'
import NavBar from '../navbar/navbar.js'
import WeeklyWeather from './WeeklyWeather.js'


export default class WeatherContainer extends React.Component {
  state = {
    weatherForecast: [],
    city: ''
  }

  componentWillMount() {
    this.fetchWeatherData()
  }

  fetchWeatherData() {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${this.props.weatherId}`)
    .then(res => res.json())
    .then(data => this.setState({
      weatherForecast: data.consolidated_weather,
      city: `${data.title.toUpperCase()}, ${data.parent.title.toUpperCase()}`
    }))
  }

  render() {
    console.log(this.state)
    return(
      <div>
        <NavBar />
        <WeeklyWeather
          weatherData={this.state.weatherForecast}
          city={this.state.city}
        />
      </div>
    )
  }
}

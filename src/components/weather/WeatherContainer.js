import React from 'react'
import NavBar from '../navbar/navbar.js'
import WeeklyWeather from './WeeklyWeather.js'


export default class WeatherContainer extends React.Component {
  state = {
    weatherForecast: []
  }

  componentWillMount() {
    this.fetchWeatherData()
  }

  fetchWeatherData() {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${this.props.weatherId}`)
    .then(res => res.json())
    .then(data => this.setState({
      weatherForecast: data
    }))
  }

  render() {
    console.log(this.state)
    return(
      <div>
        <NavBar />
        <WeeklyWeather />
      </div>
    )
  }
}

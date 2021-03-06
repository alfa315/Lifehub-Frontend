import React, { Component } from 'react';
import './App.css';
import HomePage from './components/home/HomePage.js'
import LoginForm from './components/login/LoginForm.js'
import EventsContainer from './components/events/EventsContainer.js'
import NoEventsPage from './components/events/NoEventsPage.js'
import WeatherContainer from './components/weather/WeatherContainer.js'
import ProfileContainer from './components/profile/ProfileContainer.js'
import { Route, Redirect } from 'react-router-dom'

class App extends Component {
  state = {
    currUsername: '',
    currUserId: null,
    currUserSearch: 'New York',
    currUserHomeLocation: 'new%20york',  //need to add to fetchUser to get users location
    weatherId: 2459115
  }

  fetchUser() {
    fetch('https://glacial-eyrie-97506.herokuapp.com/api/v1/users')
    .then(res => res.json())
    .then(data => {
      let currentUser = data.find((user) => user.username === this.state.currUsername)
      if(currentUser === undefined) {
        return alert('User does not exist, please sign-in as a valid user or sign-up')
      } else {
        return this.setState({
          currUserId: currentUser.id,
          currUserSearch: currentUser.location,
          currUserHomeLocation: currentUser.location.split(" ").join("%20")
        })
      }
    })
  }

  fetchWeatherId() {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${this.state.currUserHomeLocation}`)
    .then(res => res.json())
    .then(data => data.length === 0  ? this.setState({weatherId: 2459115, currUserHomeLocation: 'new%20york'}) : this.setState({weatherId: data[0].woeid}))
  }

  handleLoginChange = (event) => {
    this.setState({
      currUsername: event.target.value
    })
  }

  handleLoginSubmit = (event) => {
    event.preventDefault()
    this.fetchUser()
    this.fetchWeatherId()
  }

  handleClick = (event) => {
    event.preventDefault()
    this.setState({
      currUserId: null,
      currUsername: ''
    })
  }

  handleEventsChange = (event) => {
    this.setState({
      currUserSearch: event.target.value
    })
  }

  handleWeatherChange = (event) => {
    if(event.target.value === "") {
      return this.setState({
        currUserHomeLocation: 'new%20york'
      })
    } else {
      this.setState({
        currUserHomeLocation: event.target.value.split(" ").join("%20")
      })
      this.fetchWeatherId()
    }
  }

  handleDemoClick = (event) => {
    this.setState({
      currUserId: 2
    })
  }

  render() {
    console.log(this.state)
    if(this.state.currUserId) {
    return (
      <div className="App">
        <Redirect to='/home'/>
        <Route exact path="/home" render={(props) =>
          <HomePage
            handleClick={this.handleClick}
            userId={this.state.currUserId}
            handleSearchChange={this.handleEventsChange}
            weatherId={this.state.weatherId}
            handleWeatherChange={this.handleWeatherChange}
            city={this.state.currUserHomeLocation}
          />}
        />
        <Route exact path="/events" render={() =>
          <EventsContainer
            searchTerm={this.state.currUserSearch}
            userId={this.state.currUserId}
          />}
        />
        <Route exact path="/weather" render={() =>
          <WeatherContainer
            weatherId={this.state.weatherId}
          />}
        />
        <Route exact path="/unavailable" render={() =>
          <NoEventsPage
          handleChange={this.handleEventsChange}
          />}
        />
        <Route exact path="/profile" render={() =>
          <ProfileContainer
            currUserId={this.state.currUserId}
          />}
        />
      </div>
      )
    } else {
      return (
        <div>
          <Redirect to='/' />
          <Route exact path="/" render={() =>
            <LoginForm
              handleChange={this.handleLoginChange}
              handleSubmit={this.handleLoginSubmit}
              handleClick={this.handleDemoClick}
            />}
          />
        </div>
      )
    }
  }
}

export default App;

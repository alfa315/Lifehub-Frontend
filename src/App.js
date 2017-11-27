import React, { Component } from 'react';
import './App.css';
import HomePage from './components/home/HomePage.js'
import LoginForm from './components/login/LoginForm.js'
import EventsContainer from './components/events/EventsContainer.js'
import { Route, Redirect } from 'react-router-dom'

class App extends Component {
  state = {
    currUsername: '',
    currUserId: null,
    currUserZipCode: 10001
  }

  fetchUser() {
    fetch('http://localhost:3000/api/v1/users')
    .then(res => res.json())
    .then(data => {
      let currentUser = data.find((user) => user.username === this.state.currUsername)
      if(currentUser === undefined) {
        return alert('User does not exist, please sign-in as a valid user or sign-up')
      } else {
        return this.setState({
          currUserId: currentUser.id
        })
      }
    })
  }

  handleLoginChange = (event) => {
    this.setState({
      currUsername: event.target.value
    })
  }

  handleLoginSubmit = (event) => {
    event.preventDefault()
    this.fetchUser()
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
      currUserZipCode: event.target.value
    })
  }

  handleEventsSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    console.log(this.state)
    if(this.state.currUserId) {
    return (
      <div className="App">
        <Redirect to='/home'/>
        <Route exact path="/home" render={(props) => <HomePage handleClick={this.handleClick}
          userId={this.state.currUserId} handleZipSubmit={this.handleEventsSubmit} handleZipChange={this.handleEventsChange}
          />}
        />
        <Route exact path="/events" render={() => <EventsContainer zipCode={this.state.currUserZipCode} userId={this.state.currUserId}/>}
        />
      </div>
      )
    } else {
      return (
        <div>
          <Route exact path="/" render={() => <LoginForm
            handleChange={this.handleLoginChange}
            handleSubmit={this.handleLoginSubmit}
          />}/>
        </div>
      )
    }
  }
}

export default App;

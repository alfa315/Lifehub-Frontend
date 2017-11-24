import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar/navbar.js'
import TodoContainer from './components/todos/TodoContainer.js'
import LoginForm from './components/login/LoginForm.js'
import { Route, Redirect } from 'react-router-dom'

class App extends Component {
  state = {
    currUsername: '',
    currUserId: null
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

  render() {
    console.log(this.state)
    if(this.state.currUserId) {
    return (
      <div className="App">
        <NavBar
          handleclick={this.handleClick}
        />
        <Redirect to='/home'/>
        <Route exact path="/home" render={(props) => <TodoContainer {...props}
          userId={this.state.currUserId}
        />}/>
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

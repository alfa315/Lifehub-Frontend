import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar/navbar.js'
import TodoContainer from './components/todos/TodoContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <TodoContainer />
      </div>
    );
  }
}

export default App;

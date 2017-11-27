import React from 'react'
import NavBar from '../navbar/navbar.js'
import EventsLister from './EventsLister.js'

export default class EventsContainer extends React.Component {
  state = {
    myEvents: [],
    newTodo: {
      todoName: '',
      todoType: '',
      todoDeadline: '',
      todoDescription: ''
    }
  }

  componentDidMount() {
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${this.props.searchTerm.split(" ").join("%20")}&apikey=u7p895FVKQxrpr0AENRKDrGDasWP2OLC`)
     .then(response => response.json())
     .then(data => this.setState({
       myEvents: data._embedded.events
    }))
  }

  postTodo = () => {
    fetch('http://127.0.0.1:3000/api/v1/todos', {
      method: 'POST',
      body: JSON.stringify({
        user_id: `${this.props.userId}`,
        todo_name: `${this.state.newTodo.todoName}`,
        todo_type: `${this.state.newTodo.todoType}`,
        todo_description: `${this.state.newTodo.todoDescription}`,
        todo_deadline: `${this.state.newTodo.todoDeadline}`
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  }

  handleChange = (event) => {
    this.setState({
      newTodo: {
        ...this.state.newTodo, [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.postTodo()
    event.target.reset()
  }

  render() {
    console.log(this.state)
    return(
      <div className='events-page'>
        <div className='navbar'>
          <NavBar />
        </div>
        <div className='events-list'>
          <EventsLister handleChange={this.handleChange} handleSubmit={this.handleSubmit} userEvents={this.state.myEvents}/>
        </div>
      </div>
    )
  }
}

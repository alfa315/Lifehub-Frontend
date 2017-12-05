import React from 'react'
import NavBar from '../navbar/navbar.js'
import EventsLister from './EventsLister.js'

export default class EventsContainer extends React.Component {
  state = {
    myEvents: [],
    pageNumber: 0,
    maxPages: 1,
    newTodo: {
      todoName: '',
      todoType: '',
      todoDeadline: '',
      todoDescription: ''
    }
  }

  componentDidMount() {
    this.fetchEvents()
  }

  fetchEvents = () => {
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${this.props.searchTerm.split(" ").join("%20")}&page=${this.state.pageNumber}&apikey=u7p895FVKQxrpr0AENRKDrGDasWP2OLC`)
     .then(response => response.json())
     .then(data => data.page.totalPages === 0 ? this.setState({
       myEvents: 'No events found',
       maxPages: data.page.totalPages
    }) : this.setState({
       myEvents: data._embedded.events,
       maxPages: data.page.totalPages
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
        deadline: `${this.state.newTodo.todoDeadline}`
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
  }

  handleClick = (event) => {
    this.setState({
      pageNumber: (parseInt(event.target.text, 10) - 1)
    }, () =>this.fetchEvents())
    window.scroll(0,0)
  }

  render() {
    console.log(this.state)
    return(
      <div className='events-page'>
        <div className='navbar'>
          <NavBar />
        </div>
        <div className='events-list'>
          <EventsLister
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            userEvents={this.state.myEvents}
            pageNumber={this.state.pageNumber}
            maxPages={this.state.maxPages}
            handleClick={this.handleClick}
          />
        </div>
      </div>
    )
  }
}

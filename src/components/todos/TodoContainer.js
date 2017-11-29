import React from 'react'
import TodoList from './TodoList'


export default class TodoContainer extends React.Component {
  state = {
    newTodo: {
      todoName: '',
      todoType: '',
      todoDeadline: '',
      todoDescription: ''
    },
    todoList: [],
    shouldUpdate: true,
    currListItem: 0
  }

  componentWillMount() {
		this.fetchTodos()
	}


  fetchTodos = () => {
		fetch(`http://localhost:3000/api/v1/users/${this.props.userId}`)
		 .then(response => response.json())
		 .then(data => this.setState({
       todoList: data.todos,
       shouldUpdate: false
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
    this.setState({
      shouldUpdate: true
    })
    this.forceUpdate()
    event.target.reset()
  }


  handleDelete = (event) => {
    fetch(`http://127.0.0.1:3000/api/v1/todos/${event.target.name}`, {
      method: 'DELETE'
    })
    console.log(event.target)
    this.setState({
      shouldUpdate: true
    })
    this.forceUpdate()
  }

  handleEditClick = (event) => {
    this.setState({
      currListItem: event.target.name
    })
  }

  handleUpdate = (event) => {
    event.preventDefault()
    fetch(`http://127.0.0.1:3000/api/v1/todos/${this.state.currListItem}`, {
      method: "PATCH",
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
    this.setState({
      shouldUpdate: true,
    })
    this.forceUpdate()
  }

  shouldComponentUpdate() {
    return this.state.shouldUpdate === true
  }

  componentDidUpdate() {
    this.fetchTodos()
  }

  render() {
    console.log(this.state)
    console.log(this.props)
    return(
      <div className='todo-container'>
        <TodoList
          list={this.state.todoList}
          handleDelete={this.handleDelete}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleUpdate={this.handleUpdate}
          handleClick={this.handleEditClick}
        />
      </div>
    )
  }
}

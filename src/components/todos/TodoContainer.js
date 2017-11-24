import React from 'react'
import NewTodoInput from './NewTodoInput'
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
    shouldUpdate: true
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

  shouldComponentUpdate() {
    return this.state.shouldUpdate === true
  }

  componentDidUpdate() {
    this.fetchTodos()
  }

  render() {
    console.log(this.state)
    return(
      <div className='todo-container'>
        <NewTodoInput
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoList
          list={this.state.todoList}
        />
      </div>
    )
  }
}

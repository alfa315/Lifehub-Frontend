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
    todoList: []
  }

  handleChange = (event) => {
    this.setState({
      newTodo: {
        ...this.state.newTodo, [event.target.name]: event.target.value
      }
    })
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
    .then(res => res.json())
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const updatingList = this.state.todoList
    updatingList.push(this.state.newTodo)
    this.setState({
      todoList: updatingList
    })
    this.postTodo()
    event.target.reset()
  }


  render() {
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

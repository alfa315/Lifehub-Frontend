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

  handleSubmit = (event) => {
    event.preventDefault()
    const updatingList = this.state.todoList
    updatingList.push(this.state.newTodo)
    this.setState({
      todoList: updatingList
    })
    event.target.reset()
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

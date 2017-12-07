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

  getDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();
    if(dd<10) {
      dd = '0'+dd
    }
    if(mm<10) {
        mm = '0'+mm
    }
    today = yyyy + '-' + mm + '-' + dd;
    return today
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
    }).then(res => res.json())
      .then(data => {
        return this.setState({
          shouldUpdate: true,
          todoList: [...this.state.todoList, {id: data.id, user_id: this.props.userId, todo_name: this.state.newTodo.todoName, todo_type: this.state.newTodo.todoType, todo_description: this.state.newTodo.todoDescription, deadline: this.state.newTodo.todoDeadline}]
      })
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


  handleDelete = (event) => {
    const id = event.target.name ? event.target.name : event.target.className.split(" ")[2]
    fetch(`http://127.0.0.1:3000/api/v1/todos/${id}`, {
      method: 'DELETE'
    }).then(res => {
      const updatedTodos = this.state.todoList.filter(todo => todo.id !== parseInt(id, 10))
      return this.setState({
        shouldUpdate: true,
        todoList: updatedTodos
      })
    })
  }

  handleEditClick = (event) => {
    this.setState({
      currListItem:  event.target.name ? event.target.name : event.target.className.split(" ")[2]
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
    }).then(res => res.json())
      .then(data => {
        const editedTodos = this.state.todoList.filter(todo => todo.id !== parseInt(this.state.currListItem, 10))
        console.log(editedTodos)
        return this.setState({
          shouldUpdate: true,
          todoList: [...editedTodos, {id: data.id, user_id: this.props.userId, todo_name: this.state.newTodo.todoName, todo_type: this.state.newTodo.todoType, todo_description: this.state.newTodo.todoDescription, deadline: this.state.newTodo.todoDeadline}]
      })
    })
  }

  handleCompleteClick = (event) => {
    const id = event.target.name ? event.target.name : event.target.className.split(" ")[2]
    fetch(`http://localhost:3000/api/v1/todos/${id}`)
		 .then(response => response.json())
		 .then(data => fetch('http://127.0.0.1:3000/api/v1/completes', {
      method: 'POST',
      body: JSON.stringify({
        user_id: `${this.props.userId}`,
        todo_name: `${data.todo_name}`,
        todo_type: `${data.todo_type}`,
        todo_description: `${data.todo_description}`,
        completed_date: `${this.getDate()}`
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(res => fetch(`http://127.0.0.1:3000/api/v1/todos/${id}`, {
      method: 'DELETE'
    }).then(res => {
      const updatedTodos = this.state.todoList.filter(todo => todo.id !== parseInt(id, 10))
      return this.setState({
        shouldUpdate: true,
        todoList: updatedTodos
      })
    })))
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
          handleCompleteClick={this.handleCompleteClick}
        />
      </div>
    )
  }
}

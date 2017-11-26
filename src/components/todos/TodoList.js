import React from 'react'
import Item from './Item.js'
import NewTodoModal from './NewTodoModal.js'

export default class TodoList extends React.Component {

  render() {
    let todoRows = this.props.list.map((todo, idx) => <Item item={todo} key={idx} handleDelete={this.props.handleDelete} />)
    return(
      <div className="ui container">
        <h1 className="todo-list-header">Current To-Do List</h1>
        <NewTodoModal
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}/>
    		<table className="ui celled striped padded table">
          <thead>
            <tr>
              <th>
                <h3 className="ui center aligned header">Name</h3>
              </th>
              <th>
                <h3 className="ui center aligned header">Type</h3>
              </th>
              <th>
                <h3 className="ui center aligned header">Description</h3>
              </th>
              <th>
                <h3 className="ui center aligned header">Deadline</h3>
              </th>
              <th>
                <h3 className="ui center aligned header">Options</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {todoRows}
          </tbody>
        </table>
      </div>
    )
  }
}

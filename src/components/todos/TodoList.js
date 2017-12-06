import React from 'react'
import Item from './Item.js'
import NewTodoModal from './NewTodoModal.js'

export default class TodoList extends React.Component {

  render() {
    let todoRows = this.props.list.map((todo, idx) => <Item item={todo} key={idx} handleDelete={this.props.handleDelete} handleChange={this.props.handleChange} handleUpdate={this.props.handleUpdate} handleClick={this.props.handleClick} handleCompleteClick={this.props.handleCompleteClick}/>)
    return(
      <div className="ui container main">
        <h1 className="todo-list-header">Current To-Do List</h1>
        <NewTodoModal
          handleChange={this.props.handleChange}
          handleSubmit={this.props.handleSubmit}
        />
    		<table  className="ui inverted celled padded table">
          <thead className='headers'>
            <tr>
              <th className='center aligned'>
                <h3>Name</h3>
              </th>
              <th className='center aligned'>
                <h3>Type</h3>
              </th>
              <th className='center aligned'>
                <h3>Description</h3>
              </th>
              <th className='center aligned'>
                <h3>Deadline</h3>
              </th>
              <th className='center aligned'>
                <h3>Options</h3>
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

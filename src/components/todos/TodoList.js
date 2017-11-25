import React from 'react'
import Item from './Item.js'

export default class TodoList extends React.Component {

  render() {
    let todoRows = this.props.list.map((todo, idx) => <Item item={todo} key={idx} handleDelete={this.props.handleDelete} />)
    return(
      <div className="ui container">
        <h1>Current Todo List</h1>
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

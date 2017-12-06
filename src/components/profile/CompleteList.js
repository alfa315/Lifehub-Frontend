import React from 'react'
import CompleteItem from './CompleteItem.js'

export default class CompleteList extends React.Component {

  render() {
    let completeRows = this.props.completeList.map((complete, idx) => <CompleteItem item={complete} key={idx} />)
    return(
      <div className="ui container main">
        <h1 className="todo-list-header">Completed To-Do List</h1>
    		<table className="ui inverted celled padded table">
          <thead className='headers'>
            <tr>
              <th className='center aligned'>
                <h3>Completed Name</h3>
              </th>
              <th className='center aligned'>
                <h3>Completed Type</h3>
              </th>
              <th className='center aligned'>
                <h3>Completed Description</h3>
              </th>
              <th className='center aligned'>
                <h3>Completed Date</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {completeRows}
          </tbody>
        </table>
      </div>
    )
  }
}

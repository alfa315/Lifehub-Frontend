import React from 'react'
import DeleteItemButton from './DeleteItemButton.js'
import EditItemButton from './EditItemButton.js'
import CompleteItemButton from './CompleteItemButton.js'

const Item = (props) => {
  return(
		<tr style={{textAlign:"center"}}>
			<td>{props.item.todo_name}</td>
			<td>{props.item.todo_type}</td>
			<td>{props.item.todo_description}</td>
      <td>{props.item.deadline}</td>
      <td>
        <div className='button-options'>
          <CompleteItemButton/>
          <EditItemButton
            item={props.item}
            handleChange={props.handleChange}
            handleUpdate={props.handleUpdate}
            handleClick={props.handleClick}
          />
          <DeleteItemButton
            handleDelete={props.handleDelete}
            itemId={props.item.id}
          />
        </div>
      </td>
		</tr>
	)
}

export default Item

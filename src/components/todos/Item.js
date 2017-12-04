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
          <div className='button-options-1'>
            <CompleteItemButton
              itemId={props.item.id}
              handleClick={props.handleCompleteClick}
            />
          </div>
          <div className='button-options-2'>
            <EditItemButton
              item={props.item}
              handleChange={props.handleChange}
              handleUpdate={props.handleUpdate}
              handleClick={props.handleClick}
            />
          </div>
          <div className='button-options-3'>
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

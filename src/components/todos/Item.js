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
      <td> <CompleteItemButton/> <EditItemButton/> <DeleteItemButton/> </td>
		</tr>
	)
}

export default Item

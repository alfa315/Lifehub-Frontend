import React from 'react'

const Item = (props) => {
  return(
		<tr>
			<td>{props.item.todo_name}</td>
			<td>{props.item.todo_type}</td>
			<td>{props.item.todo_description}</td>
      <td>{props.item.deadline}</td>
		</tr>
	)
}

export default Item

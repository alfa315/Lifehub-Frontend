import React from 'react'

const Item = (props) => {
  return(
		<tr>
			<td>{props.item.todoName}</td>
			<td>{props.item.todoType}</td>
			<td>{props.item.todoDescription}</td>
      <td>{props.item.todoDeadline}</td>
		</tr>
	)
}

export default Item

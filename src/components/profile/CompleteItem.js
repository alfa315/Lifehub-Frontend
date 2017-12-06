import React from 'react'

const CompleteItem = (props) => {

  return(
		<tr>
			<td>{props.item.todo_name}</td>
			<td>{props.item.todo_type}</td>
			<td>{props.item.todo_description}</td>
      <td>{props.item.completed_date}</td>
		</tr>
	)
}

export default CompleteItem

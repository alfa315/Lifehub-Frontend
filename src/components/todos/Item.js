import React from 'react'
import DeleteItemButton from './DeleteItemButton.js'
import EditItemButton from './EditItemButton.js'
import CompleteItemButton from './CompleteItemButton.js'

const Item = (props) => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1;
  let yyyy = today.getFullYear();
  if(dd<10) {
    dd = '0'+dd
  }
  if(mm<10) {
      mm = '0'+mm
  }
  today = yyyy + '-' + mm + '-' + dd;
  let dateDifference = (new Date(props.item.deadline) - new Date(today)) / 86400000
  return(
		<tr style={{textAlign:"center"}} className={dateDifference <= 0 ? 'error' : dateDifference > 0 && dateDifference <= 3 ? 'warning' : 'normal'}>
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
              modalOpen={props.modalOpen}
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

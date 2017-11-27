import React from 'react'
import EditTodoModal from './EditTodoModal.js'
import { Button, Popup } from 'semantic-ui-react'

const EditItemButton = (props) => (
  <Popup
    trigger={<EditTodoModal handleClick={props.handleClick} item={props.item} handleChange={props.handleChange} handleUpdate={props.handleUpdate}/>}
    content='Edit Todo'
  />
)

export default EditItemButton

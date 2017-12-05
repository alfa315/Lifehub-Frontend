import React from 'react'
import EditTodoModal from './EditTodoModal.js'

const EditItemButton = (props) => (
  <EditTodoModal handleClick={props.handleClick} item={props.item} handleChange={props.handleChange} handleUpdate={props.handleUpdate} modalOpen={props.modalOpen}
  />
)

export default EditItemButton

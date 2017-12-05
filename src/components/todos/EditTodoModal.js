import React from 'react'
import EditTodoInput from './EditTodoInput.js'
import { Button, Image, Modal, Popup } from 'semantic-ui-react'

const EditTodoModal = (props) => {
  return(
    <Modal open={props.modalOpen} trigger={<div className='modal-button'><Popup name={props.item.id} trigger={<Button onClick={props.handleClick} name={props.item.id} color='yellow' icon='edit'/>} content='Edit To-Do'/></div>}>
        <Modal.Header>Edit To-Do</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
          <Modal.Description>
            <EditTodoInput item={props.item} handleChange={props.handleChange} handleUpdate={props.handleUpdate}/>
          </Modal.Description>
        </Modal.Content>
      </Modal>
  )
}

export default EditTodoModal

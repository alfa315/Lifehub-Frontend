import React from 'react'
import EditTodoInput from './EditTodoInput.js'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const EditTodoModal = (props) => {
  return(
    <Modal trigger={<div className='modal-button'><Button onClick={props.handleClick} name={props.item.id} color='yellow' icon='edit'/></div>}>
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

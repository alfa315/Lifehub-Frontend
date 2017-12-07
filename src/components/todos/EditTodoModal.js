import React from 'react'
import EditTodoInput from './EditTodoInput.js'
import { Button, Image, Modal, Popup, Icon } from 'semantic-ui-react'

const EditTodoModal = (props) => {
  return(
    <Modal trigger={<div className='modal-button'><Popup name={props.item.id} trigger={<Button size='tiny' onClick={props.handleClick} name={props.item.id} color='yellow'> <Icon className={props.item.id} name='edit' /> </Button>} content='Edit To-Do'/></div>}>
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

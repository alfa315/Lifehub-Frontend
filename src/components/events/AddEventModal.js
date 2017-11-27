import React from 'react'
import NewTodoInput from '../todos/NewTodoInput.js'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const AddEventModal = (props) => {
  return(
    <Modal trigger={<div className='modal-button'><Button size='large' basic color='green'>Add New To-Do</Button></div>}>
        <Modal.Header>Add New To-Do</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
          <Modal.Description>
            <NewTodoInput handleChange={props.handleChange} handleSubmit={props.handleSubmit}/>
          </Modal.Description>
        </Modal.Content>
      </Modal>
  )
}

export default AddEventModal

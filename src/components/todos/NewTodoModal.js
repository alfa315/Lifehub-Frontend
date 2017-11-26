import React from 'react'
import NewTodoInput from './NewTodoInput.js'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const NewTodoModal = (props) => {
  return(
    <Modal trigger={<div className='modal-button'><Button primary>Add New To-Do</Button></div>}>
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

export default NewTodoModal

import React from 'react'
import NewTodoInput from './NewTodoInput.js'
import { Button, Image, Modal } from 'semantic-ui-react'

const NewTodoModal = (props) => {
  return(
    <div className='modal-button'><Modal dimmer='blurred' trigger={<Button color='green'>Add New To-Do</Button>}>
        <Modal.Header>Add New To-Do</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
          <Modal.Description>
            <NewTodoInput handleChange={props.handleChange} handleSubmit={props.handleSubmit}/>
          </Modal.Description>
        </Modal.Content>
      </Modal></div>
  )
}

export default NewTodoModal

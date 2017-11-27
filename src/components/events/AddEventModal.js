import React from 'react'
import EventTodoInput from './EventTodoInput.js'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const AddEventModal = (props) => {
  return(
    <Modal trigger={<div className='modal-button'><Button size='large' basic color='green'>Add New To-Do</Button></div>}>
        <Modal.Header>Add New To-Do</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <container>
              <div className='event-details'>
                <h3>{props.eventName}</h3>
                <Image centered size='small' src={props.eventImage} />
                <h4>{props.eventDate}</h4>
                <h4>{props.eventTime}</h4>
                <h4>{props.eventLocation}</h4>
              </div>
              <div className='event-input'>
                <EventTodoInput
                  handleChange={props.handleChange}
                  handleSubmit={props.handleSubmit}
                />
              </div>
            </container>
          </Modal.Description>
        </Modal.Content>
      </Modal>
  )
}

export default AddEventModal

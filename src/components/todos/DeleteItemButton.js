import React from 'react'
import { Button, Popup, Icon } from 'semantic-ui-react'

const DeleteItemButton = (props) => (
  <Popup
    trigger={<Button size='tiny' color='red' name={props.itemId} onClick={props.handleDelete}> <Icon className={props.itemId} name='trash' /> </Button>}
    content='Delete To-Do'
  />
)

export default DeleteItemButton

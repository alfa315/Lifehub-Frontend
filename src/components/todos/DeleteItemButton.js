import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const DeleteItemButton = (props) => (
  <Popup
    trigger={<Button icon='trash' name={props.itemId} onClick={props.handleDelete} />}
    content='Delete Todo'
  />
)

export default DeleteItemButton

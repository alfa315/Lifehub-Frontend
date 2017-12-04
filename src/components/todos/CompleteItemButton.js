import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const CompleteItemButton = (props) => (
  <Popup
    trigger={<Button color='green' icon='checkmark' name={props.itemId} onClick={props.handleClick}/>}
    content='Completed Todo?'
  />
)

export default CompleteItemButton

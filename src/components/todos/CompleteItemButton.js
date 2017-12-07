import React from 'react'
import { Button, Popup, Icon } from 'semantic-ui-react'

const CompleteItemButton = (props) => (
  <Popup
    trigger={<Button color='green' size='tiny' name={props.itemId} onClick={props.handleClick}> <Icon className={props.itemId} name='checkmark' /> </Button>}
    content='Completed Todo?'
  />
)

export default CompleteItemButton

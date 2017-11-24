import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const CompleteItemButton = () => (
  <Popup
    trigger={<Button icon='checkmark' />}
    content='Completed Todo?'
  />
)

export default CompleteItemButton

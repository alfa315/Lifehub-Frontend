import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const EditItemButton = () => (
  <Popup
    trigger={<Button color='yellow' icon='edit' />}
    content='Edit Todo'
  />
)

export default EditItemButton

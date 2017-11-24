import React from 'react'
import { Button, Popup } from 'semantic-ui-react'

const DeleteItemButton = () => (
  <Popup
    trigger={<Button icon='remove' />}
    content='Delete Todo'
  />
)

export default DeleteItemButton

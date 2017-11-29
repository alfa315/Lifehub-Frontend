import React from 'react'
import { Menu } from 'semantic-ui-react'

const ListPagination = (props) => {
  return(
    <Menu pagination>
      <Menu.Item name={props.pageNumber + 1} onClick={props.handleClick} />
      <Menu.Item name={props.pageNumber + 2} onClick={props.handleClick} />
      <Menu.Item name={props.pageNumber + 3} onClick={props.handleClick} />
      <Menu.Item name={props.pageNumber + 4} onClick={props.handleClick} />
    </Menu>
  )
}

export default ListPagination

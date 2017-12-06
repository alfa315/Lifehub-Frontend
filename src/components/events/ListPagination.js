import React from 'react'
import { Menu } from 'semantic-ui-react'

const ListPagination = (props) => {
  return(
    <Menu pagination>
      {props.pageNumber + 1 <= props.maxPages ? <Menu.Item name={props.pageNumber + 1} active={true} onClick={props.handleClick} /> : null}
      {props.pageNumber + 2 <= props.maxPages ? <Menu.Item name={props.pageNumber + 2} onClick={props.handleClick} /> : null}
      {props.pageNumber + 3 <= props.maxPages ? <Menu.Item name={props.pageNumber + 3} onClick={props.handleClick} /> : null}
      {props.pageNumber + 4 <= props.maxPages ? <Menu.Item name={props.pageNumber + 4} onClick={props.handleClick} />: null}
    </Menu>
  )
}

export default ListPagination

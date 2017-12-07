import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Input } from 'semantic-ui-react'

const EventSeachBox = (props) => {
  return(
    <div>
      <h4> Please enter your desired event location, event type, or event name to find any related events for you. </h4>
      <div className="event-search-input">
        <form onChange={props.handleChange} onSubmit={e => { e.preventDefault() }}>
          <Input><input icon='search' type="text" placeholder='Search Term'/></Input>
        </form>
      </div>
      <div className="event-search-button">
        <Button basic size='tiny' > <font size="3.7"><Link to='/events' style={{color: 'black'}} className="item">
          View Events
        </Link></font></Button>
      </div>
    </div>
  )
}

export default EventSeachBox

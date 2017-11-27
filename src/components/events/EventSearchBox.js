import React from 'react'
import { Link } from 'react-router-dom'

const EventSeachBox = (props) => {
  return(
    <div>
      <h4> Please enter your desired search term of location, event type, or event name to find events for you. </h4>
      <form onSubmit={props.handleSubmit}>
        <input type="text" placeholder='Search Term' onChange={props.handleChange}/>
        <input type='submit' value='Update Events'/>
      </form>
      <button > <Link to='/events' className="item">
        View Events
      </Link></button>
    </div>
  )
}

export default EventSeachBox

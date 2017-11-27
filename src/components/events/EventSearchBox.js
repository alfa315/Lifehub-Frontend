import React from 'react'
import { Link } from 'react-router-dom'

const EventSeachBox = (props) => {
  return(
    <div>
      <h4> Please enter your zip code, and hit submit to see events in your area. </h4>
      <form onSubmit={props.handleSubmit}>
        <input type="text" placeholder='Zipcode' onChange={props.handleChange}/>
        <input type='submit' value='Update Events'/>
      </form>
      <button > <Link to='/events' className="item">
        View Events
      </Link></button>
    </div>
  )
}

export default EventSeachBox

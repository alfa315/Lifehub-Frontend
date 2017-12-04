import React from 'react'
import EventSearchBox from './EventSearchBox.js'

const NoEventsPage = (props) => {
  return(
    <div>
      <h1>No Events Found, please try another term</h1>
      <EventSearchBox handleChange={props.handleChange}/>
    </div>
  )
}

export default NoEventsPage

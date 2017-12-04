import React from 'react'
import EventSearchBox from './EventSearchBox.js'
import NavBar from '../navbar/navbar.js'

const NoEventsPage = (props) => {
  return(
    <div>
      <div>
        <NavBar />
      </div>
      <div className='not-found-header'>
        <h1>No Events Found, please try another term</h1>
        <EventSearchBox handleChange={props.handleChange}/>
      </div>
    </div>
  )
}

export default NoEventsPage

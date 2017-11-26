import React from 'react'
import NavBar from '../navbar/navbar.js'
import EventsLister from './EventsLister.js'

export default class EventsContainer extends React.Component {
  state = {
    myEvents: []
  }

  componentDidMount() {
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?postalCode=${this.props.zipCode}&apikey=u7p895FVKQxrpr0AENRKDrGDasWP2OLC`)
     .then(response => response.json())
     .then(data => this.setState({
       myEvents: data._embedded.events
    }))
  }

  render() {
    console.log(this.state)
    return(
      <div className='events-div'>
        <NavBar />
        <EventsLister userEvents={this.state.myEvents}/>
      </div>
    )
  }
}

import React from 'react'
import AddEventModal from './AddEventModal.js'
import { Button, Card, Image, Dimmer, Loader, Segment, Grid } from 'semantic-ui-react'


const EventsLister = (props) => {
  if(props.userEvents.length === 0 || props.userEvents === undefined ) {
    return (
      <div className='ui-segment'>
        <Segment>
          <Dimmer active>
            <Loader size='huge' indeterminate>Preparing Files</Loader>
          </Dimmer>
        </Segment>
      </div>
    )
  } else {
    return <Grid className='events-grid' stackable columns={2}>
      {props.userEvents.map((event) => {
        return(
          <Grid.Column>
            <Card.Group>
              <Card centered>
                <Card.Content>
                  <Image floated='right' size='small' src={event.images[0].url} />
                  <Card.Header>
                    {event.name}
                  </Card.Header>
                  <Card.Meta>
                  </Card.Meta>
                  <Card.Description>
                    <p>{event._embedded.venues[0].name}</p>
                    <p>{event.dates.start.localDate}</p>
                    <p>{event.dates.start.localTime}</p>
                    <a href={event.url} >Buy Tickets</a>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='add-button'>
                    <AddEventModal handleChange={props.handleChange} handleSubmit={props.handleSubmit}/>
                  </div>
                </Card.Content>
              </Card>
            </Card.Group>
          </Grid.Column>
        )
      })}
    </Grid>
  }
}

export default EventsLister

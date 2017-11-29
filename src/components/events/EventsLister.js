import React from 'react'
import AddEventModal from './AddEventModal.js'
import ListPagination from './ListPagination.js'
import { Card, Image, Loader, Grid } from 'semantic-ui-react'


const EventsLister = (props) => {
  if(props.userEvents.length === 0) {
    return (
      <div className='ui-segment loader'>
        <Loader size='huge' active inline indeterminate>Gathering Events</Loader>
      </div>
    )
  } else if(props.userEvents === undefined) {
    return(
      window.alert("Weather Data unavailable at the moment, please try again.")
    )
  } else {
    return <div>
      <Grid className='events-grid' stackable columns={2}>
        {props.userEvents.map((ev) => {
          return(
            <Grid.Column>
              <Card.Group>
                <Card centered>
                  <Card.Content>
                    <Image floated='right' size='small' src={ev.images[0].url} />
                    <Card.Header>
                      <font size='3.7'>{ev.name}</font>
                    </Card.Header>
                    <Card.Meta>
                    </Card.Meta>
                    <Card.Description>
                      <p>{ev._embedded.venues[0].name}</p>
                      <p>{ev.dates.start.localDate}</p>
                      <p>{ev.dates.start.localTime}</p>
                      <a href={ev.url} >Buy Tickets</a>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className='add-button'>
                      <AddEventModal
                        handleChange={props.handleChange}
                        handleSubmit={props.handleSubmit}
                        eventName={ev.name}
                        eventImage={ev.images[0].url}
                        eventDate={ev.dates.start.localDate}
                        eventTime={ev.dates.start.localTime}
                        eventLocation={ev._embedded.venues[0].name}
                      />
                    </div>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Grid.Column>
          )
        })}
      </Grid>
      <div className='pagination-events'>
        <ListPagination pageNumber={props.pageNumber} maxPages={props.maxPages} handleClick={props.handleClick}/>
      </div>
    </div>
  }
}

export default EventsLister

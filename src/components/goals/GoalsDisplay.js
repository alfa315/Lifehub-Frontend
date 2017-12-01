import React from 'react'
import { Card, Segment, Dimmer, Loader } from 'semantic-ui-react'

const GoalsDisplay = (props) => {
  let num = Math.floor((Math.random() * props.goals.length) + 1)
  if(props.goals.length === 0 || props.goals === undefined) {
    return (
      <div className='ui-segment'>
        <Segment>
          <Dimmer active>
            <Loader size='huge' active inline='center'>Thinking of something...</Loader>
          </Dimmer>
        </Segment>
      </div>
    )
  } else {
    return(
      <Card.Content>
        <Card.Header>
          Goal of the Day
        </Card.Header>
        <Card.Meta>
          <p>{props.goals[num].name}</p>
        </Card.Meta>
        <Card.Description>
          <p>{props.goals[num].description}</p>
        </Card.Description>
      </Card.Content>
    )
  }

}

export default GoalsDisplay

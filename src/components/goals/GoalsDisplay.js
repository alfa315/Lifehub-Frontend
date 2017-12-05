import React from 'react'
import { Card, Segment, Dimmer, Loader } from 'semantic-ui-react'

const GoalsDisplay = (props) => {
  if(props.goals.length === 0 || props.goals === undefined || props.goals[props.num].name === undefined) {
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
          <p>{props.goals[props.num].name}</p>
        </Card.Meta>
        <Card.Description>
          <div className='goal-description-header'>
            <h4>{props.goals[props.num].description}</h4>
          </div>

        </Card.Description>
      </Card.Content>
    )
  }

}

export default GoalsDisplay

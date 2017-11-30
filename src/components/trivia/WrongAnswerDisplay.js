import React from 'react'
import { Card, Button } from 'semantic-ui-react'

const WrongAnswerDisplay = (props) => {
  return(
    <Card.Content>
      <Card.Header>
        <font size='3.7'>You were wrong!</font>
      </Card.Header>
      <Card.Description>
        <p>Question Difficulty: {props.question.difficulty.toUpperCase()}</p>
        <p>Overall Results</p>
        <p>Correct: </p>
        <p>Incorrect: </p>
      </Card.Description>
      <Button basic size='tiny' onClick={props.handleClick} > <font size="3.7" style={{color: 'black'}}>New Question?</font></Button>
    </Card.Content>
  )
}

export default WrongAnswerDisplay

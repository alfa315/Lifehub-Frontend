import React from 'react'
import { Card, Button } from 'semantic-ui-react'

const CorrectAnswerDisplay = (props) => {
  return(
    <Card.Content>
      <Card.Header>
        <font size='3.7'>You were right!</font>
      </Card.Header>
      <Card.Description>
        <p>Question Difficulty: {props.question.difficulty.toUpperCase()}</p>
        <p>Overall Results</p>
        <p>Correct: {props.correct}</p>
        <p>Incorrect: {props.incorrect}</p>
      </Card.Description>
      <Button basic size='tiny' onClick={props.handleClick} > <font size="3.7" style={{color: 'black'}}>New Question?</font></Button>
    </Card.Content>
  )
}

export default CorrectAnswerDisplay

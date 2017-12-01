import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import he from 'he'

const WrongAnswerDisplay = (props) => {
  return(
    <Card.Content>
      <Card.Header>
        <font size='3.7'>You were wrong!</font>
      </Card.Header>
      <Card.Description>
        <p>Question Difficulty: {props.question.difficulty.toUpperCase()}</p>
        <p>Correct Answer: {he.decode(props.question.correct_answer)}</p>
        <p>Overall Results</p>
        <p>Correct: </p>
        <p>Incorrect: </p>
      </Card.Description>
      <Button basic size='tiny' onClick={props.handleClick} > <font size="3.7" style={{color: 'black'}}>New Question?</font></Button>
    </Card.Content>
  )
}

export default WrongAnswerDisplay

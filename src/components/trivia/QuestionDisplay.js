import React from 'react'
import QuestionForm from './QuestionForm.js'
import CorrectAnswerDisplay from './CorrectAnswerDisplay.js'
import WrongAnswerDisplay from './WrongAnswerDisplay.js'
import { Segment, Dimmer, Loader } from 'semantic-ui-react'

const QuestionDisplay = (props) => {
  if(props.question.length === 0 || props.question === undefined) {
    return (
      <div className='ui-segment'>
        <Segment>
          <Dimmer active>
            <Loader size='huge' active>Thinking of something...</Loader>
          </Dimmer>
        </Segment>
      </div>
    )
  } else if(props.answerResult === true) {
    props.handleCorrect()
    return(
      <CorrectAnswerDisplay
        question={props.question}
        answerResult={props.answerResult}
        handleClick={props.handleClick}
        correct={props.correct}
        incorrect={props.incorrect}
      />
    )
  } else if(props.answerResult === false) {
    props.handleIncorrect()
    return(
      <WrongAnswerDisplay
        question={props.question}
        answerResult={props.answerResult}
        handleClick={props.handleClick}
        correct={props.correct}
        incorrect={props.incorrect}
      />
    )
  } else {
    return(
      <QuestionForm
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
        question={props.question}
        answerOrder={props.answerOrder}
      />
    )
  }

}

export default QuestionDisplay

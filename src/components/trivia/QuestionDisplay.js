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
            <Loader size='huge' active inline='center'>Thinking of something...</Loader>
          </Dimmer>
        </Segment>
      </div>
    )
  } else if(props.answerResult === true) {
    return(
      <CorrectAnswerDisplay
        question={props.question}
        answerResult={props.answerResult}
        handleClick={props.handleClick}
      />
    )
  } else if(props.answerResult === false) {
    return(
      <WrongAnswerDisplay
        question={props.question}
        answerResult={props.answerResult}
        handleClick={props.handleClick}
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

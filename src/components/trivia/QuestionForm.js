import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import he from 'he'

const QuestionForm = (props) => {
  let incorrect = props.question.incorrect_answers
  let choices = [...incorrect, props.question.correct_answer]

  return(
    <Card.Content>
      <Card.Header>
        <font size='3.7'>Learn Something New!</font>
      </Card.Header>
      <Card.Meta>
        <p>Category: {props.question.category}</p>
      </Card.Meta>
      <Card.Description>
        <strong>Question</strong><p>{he.decode(props.question.question)}</p>
        <form className='answer-list' onSubmit={props.handleSubmit} onChange={props.handleChange}>
          <div className='trivia-div'>
            <input className='trivia-input' type='radio' name='trivia' value={choices[props.answerOrder[0]]}/>
            <label className='trivia-labels'>
              {he.decode(choices[props.answerOrder[0]])}
            </label>
          </div>
          <div className='trivia-div'>
            <input className='trivia-input' type='radio' name='trivia' value={choices[props.answerOrder[1]]}/>
            <label className='trivia-labels'>
              {he.decode(choices[props.answerOrder[1]])}
            </label>
          </div>
          <div className='trivia-div'>
            <input className='trivia-input' type='radio' name='trivia' value={choices[props.answerOrder[2]]}/>
            <label className='trivia-labels'>
              {he.decode(choices[props.answerOrder[2]])}
            </label>
          </div>
          <div className='trivia-div'>
            <input className='trivia-input' type='radio' name='trivia' value={choices[props.answerOrder[3]]}/>
            <label className='trivia-labels'>
              {he.decode(choices[props.answerOrder[3]])}
            </label>
          </div>
          <div className='trivia-submit'>
            <Button basic size='tiny' > <font size="3.7" style={{color: 'black'}}>Submit</font></Button>
          </div>
        </form>

      </Card.Description>
    </Card.Content>
  )
}

export default QuestionForm

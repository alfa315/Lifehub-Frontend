import React from 'react'
import { Card } from 'semantic-ui-react'
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
        <form onSubmit={props.handleSubmit} onChange={props.handleChange}>
          <div className='trivia-div'>
            <input className='trivia-input' type='radio' name='trivia' value={choices[0]}/>
            <label className='trivia-labels'>
              {he.decode(choices[0])}
            </label>
          </div>
          <div>
            <input className='trivia-input' type='radio' name='trivia' value={choices[1]}/>
            <label className='trivia-labels'>
              {he.decode(choices[1])}
            </label>
          </div>
          <div>
            <input className='trivia-input' type='radio' name='trivia' value={choices[2]}/>
            <label className='trivia-labels'>
              {he.decode(choices[2])}
            </label>
          </div>
          <div>
            <input className='trivia-input' type='radio' name='trivia' value={choices[3]}/>
            <label className='trivia-labels'>
              {he.decode(choices[3])}
            </label>
          </div>
          <input name='trivia' type='submit' />
        </form>

      </Card.Description>
    </Card.Content>
  )
}

export default QuestionForm

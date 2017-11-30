import React from 'react'
import QuestionDisplay from './QuestionDisplay.js'


export default class TriviaContainer extends React.Component {
  state = {
    currentQuestion: [],
    selectedAnswer: '',
    correctAnswer: '',
    answerResult: null
  }

  componentWillMount() {
    this.fetchQuestion()
  }

  fetchQuestion = () => {
    fetch('https://opentdb.com/api.php?amount=1&type=multiple')
    .then(response => response.json())
    .then(data => this.setState({
      currentQuestion: data.results[0],
      correctAnswer: data.results[0].correct_answer
    }))
  }


  handleSubmit = (event) => {
    event.preventDefault()
    if(this.state.selectedAnswer === this.state.correctAnswer) {
      return this.setState({answerResult: true})
    } else {
      return this.setState({answerResult: false})
    }
    console.log(this.state.answerResult)
    console.log(typeof this.state.selectedAnswer)
    console.log(typeof this.state.correctAnswer)
  }

  handleChange = (event) => {
    this.setState({
      selectedAnswer: event.target.value
    })
    console.log(event.target.value)
    console.log(this.state)
  }

  handleClick = (event) => {
    this.setState({
      answerResult: null
    }, () => this.fetchQuestion())
  }


  render() {
    return(
      <QuestionDisplay
        question={this.state.currentQuestion}
        answerResult={this.state.answerResult}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
      />
    )
  }
}

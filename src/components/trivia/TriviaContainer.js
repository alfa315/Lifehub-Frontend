import React from 'react'
import QuestionDisplay from './QuestionDisplay.js'


export default class TriviaContainer extends React.Component {
  state = {
    currentQuestion: [],
    selectedAnswer: '',
    correctAnswer: '',
    answerResult: null,
    answerOrder: [0, 1, 2, 3]
  }

  componentWillMount() {
    this.fetchQuestion()
    this.shuffle(this.state.answerOrder)
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
      this.shuffle(this.state.answerOrder)
      return this.setState({answerResult: true})
    } else {
      this.shuffle(this.state.answerOrder)
      return this.setState({answerResult: false})
    }
  }

  handleChange = (event) => {
    this.setState({
      selectedAnswer: event.target.value
    })
  }

  handleClick = (event) => {
    this.setState({
      answerResult: null
    }, () => this.fetchQuestion())
  }

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  render() {
    return(
      <QuestionDisplay
        question={this.state.currentQuestion}
        answerResult={this.state.answerResult}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        answerOrder={this.state.answerOrder}
      />
    )
  }
}

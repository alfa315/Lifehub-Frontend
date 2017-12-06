import React from 'react'
import QuestionDisplay from './QuestionDisplay.js'


export default class TriviaContainer extends React.Component {
  state = {
    currentQuestion: [],
    selectedAnswer: '',
    correctAnswer: '',
    answerResult: null,
    answerOrder: [0, 1, 2, 3],
    correct: 0,
    incorrect: 0
  }

  componentWillMount() {
    this.fetchQuestion()
    this.fetchStats()
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

  fetchStats = () => {
		fetch(`http://localhost:3000/api/v1/users/${this.props.userId}`)
		 .then(response => response.json())
		 .then(data => this.setState({
       correct: data.correct,
       incorrect: data.incorrect
    }))
	}


  handleUpdateCorrect = (event) => {
    fetch(`http://127.0.0.1:3000/api/v1/users/${this.props.userId}`, {
      method: "PATCH",
      body: JSON.stringify({
        correct: parseInt(`${this.state.correct}`, 10)
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  }

    handleUpdateIncorrect = (event) => {
      fetch(`http://127.0.0.1:3000/api/v1/users/${this.props.userId}`, {
        method: "PATCH",
        body: JSON.stringify({
          incorrect: parseInt(`${this.state.incorrect}`, 10)
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
    }


  handleSubmit = (event) => {
    event.preventDefault()
    if(this.state.selectedAnswer === this.state.correctAnswer) {
      this.shuffle(this.state.answerOrder)
      return this.setState({answerResult: true, correct: this.state.correct + 1})
    } else {
      this.shuffle(this.state.answerOrder)
      return this.setState({answerResult: false, incorrect: this.state.incorrect + 1})
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
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
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
        handleCorrect={this.handleUpdateCorrect}
        handleIncorrect={this.handleUpdateIncorrect}
        correct={this.state.correct}
        incorrect={this.state.incorrect}
      />
    )
  }
}

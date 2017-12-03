import React from 'react'
import GoalsDisplay from './GoalsDisplay.js'

export default class GoalsContainer extends React.Component {
  state = {
    goals: [],
    randomNum: null
  }

  componentWillMount() {
    this.fetchGoals()
  }

  fetchGoals = () => {
    fetch('http://localhost:3000/api/v1/goals')
		 .then(response => response.json())
		 .then(data => this.setState({
       goals: data,
       randomNum: Math.floor((Math.random() * data.length) + 1)
    }))
  }

  render() {
    return(
      <GoalsDisplay goals={this.state.goals} num={this.state.randomNum}/>
    )
  }
}

import React from 'react'
import NavBar from '../navbar/navbar.js'
import UserDetails from './UserDetails.js'

export default class ProfileContainer extends React.Component {
  state = {
    userInfo: {},
    completedItems: 0,
    remainingItems: 0,
    correct: 0,
    Incorrect: 0
  }

  componentWillMount() {
		this.fetchData()
	}

  fetchData = () => {
		fetch(`http://localhost:3000/api/v1/users/${this.props.currUserId}`)
		 .then(response => response.json())
		 .then(data => this.setState({
       userInfo: data,
       remainingItems: data.todos.length,
       completedItems: data.completes.length,
       correct: data.correct,
       incorrect: data.incorrect
    }))
	}

  render() {
    return(
      <div>
        <NavBar />
        <UserDetails
          userInfo={this.state.userInfo}
          completedItems={this.state.completedItems}
          remainingItems={this.state.remainingItems}
          correct={this.state.correct}
          incorrect={this.state.incorrect}
        />
      </div>
    )
  }
}

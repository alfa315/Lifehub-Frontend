import React from 'react'
import NavBar from '../navbar/navbar.js'
import UserDetails from './UserDetails.js'
import CompleteList from './CompleteList.js'

export default class ProfileContainer extends React.Component {
  state = {
    userInfo: {},
    completedItems: 0,
    remainingItems: 0,
    correct: 0,
    Incorrect: 0,
    completeList: []
  }

  componentWillMount() {
		this.fetchData()
	}

  fetchData = () => {
		fetch(`https://glacial-eyrie-97506.herokuapp.com/api/v1/users/${this.props.currUserId}`)
		 .then(response => response.json())
		 .then(data => this.setState({
       userInfo: data,
       remainingItems: data.todos.length,
       completedItems: data.completes.length,
       correct: data.correct,
       incorrect: data.incorrect,
       completeList: data.completes
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
        <CompleteList
          completeList={this.state.completeList}
        />
      </div>
    )
  }
}

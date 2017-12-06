import React from 'react'
import { Card, Input, Button } from 'semantic-ui-react'

const UserDetails = (props) => {
  return(
    <div className='user-details-div'>
      <Card centered className='user-details-card'>
       <Card.Header>
        <h1 className='user-details-header'>Hello {props.userInfo.first_name}!</h1>
       </Card.Header>
       <Card.Content>
       <Card.Description>
         <div className='details-div'>
            <h2>User Details</h2>
            <h3>Username: {props.userInfo.username}</h3>
            <h3>Name: {props.userInfo.first_name} {props.userInfo.last_name}</h3>
            <h3>Location: {props.userInfo.location}</h3>
         </div>
         <div className='stats-div'>
           <h2>User Stats</h2>
           <h3>Total To-Dos Outstanding: {props.remainingItems} </h3>
           <h3>Total Tasks Completed: {props.completedItems} </h3>
           <h3>Questions of the Day Correct: {props.correct} </h3>
           <h3>Questions of the Day Incorrect: {props.incorrect} </h3>
         </div>
       </Card.Description>
       </Card.Content>
       <Card.Content extra>
         Return Home
       </Card.Content>
      </Card>
    </div>
  )
}

export default UserDetails

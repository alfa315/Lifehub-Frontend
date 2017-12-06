import React from 'react'
import { Card, Input, Button, List } from 'semantic-ui-react'

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
            <List className='details-list'>
              <List.Item>Username: {props.userInfo.username}</List.Item>
              <List.Item>Name: {props.userInfo.first_name} {props.userInfo.last_name}</List.Item>
              <List.Item>Location: {props.userInfo.location}</List.Item>
            </List>
         </div>
         <div className='stats-div'>
           <h2>User Stats</h2>
           <List className='stats-list'>
             <List.Item>Total To-Dos Outstanding: {props.remainingItems} </List.Item>
             <List.Item>Total Tasks Completed: {props.completedItems} </List.Item>
             <List.Item>Questions of the Day Correct: {props.correct} </List.Item>
             <List.Item>Questions of the Day Incorrect: {props.incorrect} </List.Item>
           </List>
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

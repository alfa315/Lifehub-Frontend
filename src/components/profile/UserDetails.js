import React from 'react'
import { Card, Button, List, Statistic } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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
              <List.Item>Username:</List.Item>
                <List.List>{props.userInfo.username}</List.List>
              <List.Item>Name:</List.Item>
                <List.List>{props.userInfo.first_name} {props.userInfo.last_name}</List.List>
              <List.Item>Location:</List.Item>
                <List.List>{props.userInfo.location}</List.List>
            </List>
         </div>
         <div className='stats-div'>
           <h2>User Stats</h2>
           <List className='stats-list'>
             <List.Item>Total To-Dos Outstanding:</List.Item>
              <List.List>{props.remainingItems}</List.List>
             <List.Item>Total Tasks Completed:</List.Item>
              <List.List>{props.completedItems}</List.List>
             <List.Item>Questions of the Day Correct:</List.Item>
              <List.List>{props.correct}</List.List>
             <List.Item>Questions of the Day Incorrect:</List.Item>
              <List.List>{props.incorrect}</List.List>
           </List>
         </div>
       </Card.Description>
       </Card.Content>
       <Card.Content extra>
         <Button basic size='tiny' > <font size="3.7"><Link to='/home' style={{color: 'black'}} className="item">
           Return Home
         </Link></font></Button>
       </Card.Content>
      </Card>
    </div>
  )
}

export default UserDetails

import React from 'react'
import { Card, Input, Button } from 'semantic-ui-react'

const LoginForm = (props) => {
  return (
    <div className='login-form-div'>
      <Card centered className='login'>
       <Card.Header>
        <h1 className='login-header'>Please Log-In</h1>
       </Card.Header>
       <Card.Content>
       <Card.Description>
         <div className='login-div'>
           <form className='login-form' onSubmit={props.handleSubmit}>
             <div>
               <Input
                 type='text'
                 size='huge'
                 placeholder='Username'
                 required='required'
                 onChange={props.handleChange}
               />
             </div>
             <div className='login-submit-button'>
              <Button style={{color: 'black'}} basic size='huge' >Submit</Button>
             </div>
           </form>
           <Button positive size='massive' onClick={props.handleClick}>DEMO</Button>
         </div>
       </Card.Description>
       </Card.Content>
       <Card.Content extra>
         <p>Not a user? Sign-Up</p>
       </Card.Content>
      </Card>
    </div>
  )
}

export default LoginForm

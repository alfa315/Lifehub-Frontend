import React from 'react'
import { Card } from 'semantic-ui-react'

const LoginForm = (props) => {
  return (
    <div className='login-form-div'>
      <Card centered>
       <Card.Header>
        <h3>Please Log-In</h3>
       </Card.Header>
       <Card.Content>
       <Card.Description>
         <div className='login-div'>
           <form className='login-form' onSubmit={props.handleSubmit}>
             <label>
               Username:
             </label>
             <input
               type='text'
               placeholder='Username'
               required='required'
               onChange={props.handleChange}
             />
             <input
               type='submit'
             />
           </form>
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

import React from 'react'

const LoginForm = (props) => {
  return (
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
  )
}

export default LoginForm

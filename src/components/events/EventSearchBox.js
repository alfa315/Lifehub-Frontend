import React from 'react'

const EventSeachBox = (props) => {
  return(
    <div>
      <h4> Please enter your zip code, and hit submit to see events in your area. </h4>
      <form onSubmit={props.handleSubmit}>
        <input type="text" placeholder='Zipcode' onChange={props.handleChange}/>
        <input type='submit'/>
      </form>
    </div>
  )
}

export default EventSeachBox

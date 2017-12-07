import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const EventTodoInput = (props) => {
  return(
    <form onChange={props.handleChange}>
      <label>Todo Name</label>
      <div className='todo-name'>
        <input type='text' name='todoName'/>
      </div>
      <label> Select Todo Type </label>
      <div className='todo-type'>
        <select name="todoType" className="ui selection dropdown" id="select">
          <option value="">Select Type</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Social Events">Social Events</option>
          <option value="Errands">Errands</option>
        </select>
      </div>
      <label>Task Deadline</label>
      <div>
        <input type='date' name='todoDeadline'/>
      </div>

      <label>Todo Description</label>
      <div className="field">
        <textarea name='todoDescription' rows="2" ></textarea>
      </div>
      <Button onClick={props.handleSubmit} basic size='tiny' > <font size="3.7"><Link to='/home' style={{color: 'black'}} className="item">
        Submit
      </Link></font></Button>

    </form>
  )
}

export default EventTodoInput

import React from 'react'

const NewTodoInput = (props) => {
  return(
    <form onChange={props.handleChange} onSubmit={props.handleSubmit}>
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
      <input type='submit'/>

    </form>
  )
}

export default NewTodoInput

import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <div className='navbar'>
      <div className="ui secondary pointing menu large">
        <Link to='/home' className="item active">
          Home
        </Link>
        <a className="item">
          Events
        </a>
        <a className="item">
          Weather
        </a>
      <div className="right menu" onClick={props.handleclick}>
        <Link to='/' className="ui item" >
          Logout
        </Link>
      </div>
    </div>
  </div>
  )
}

export default NavBar

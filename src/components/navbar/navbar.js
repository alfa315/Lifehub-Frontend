import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <div className='navbar'>
      <div className="ui secondary pointing menu large">
        <Link to='/home' className="item">
          Home
        </Link>
        <Link to ='/events' className="item">
          Events
        </Link>
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

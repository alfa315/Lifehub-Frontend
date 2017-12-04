import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <div className='navbar'>
      <div className="ui inverted fixed menu">
        <div><h3 className='item'>LIFEHUB</h3></div>
        <Link to='/home' className="item">
          Home
        </Link>
        <Link to ='/events' className="item">
          Events
        </Link>
        <Link to ='/weather' className="item">
          Weather
        </Link>
        <Link to='/analytics' className="item">
          Analytics
        </Link>
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
